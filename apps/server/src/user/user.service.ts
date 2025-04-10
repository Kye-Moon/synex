import {Injectable} from '@nestjs/common';
import {UserRepository} from "./user.repository";
import {NewUser, Organisation} from "../drizzle/schema";
import {OrganisationService} from "../organisation/organisation.service";
import {RequestService} from "../request/request.service";
import {clerkClient} from "@clerk/clerk-sdk-node";
import {OrganisationRepository} from "../organisation/organisation.repository";

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly organisationService: OrganisationService,
        private readonly organisationRepository: OrganisationRepository,
        private readonly request: RequestService,
    ) {
    }

    async findOrCreateByAuthServiceId(input: NewUser) {
        const user = await this.userRepository.findOneByAuthId(input.authServiceId);
        if (user) {
            return user;
        }
        return await this.userRepository.create(input);
    }

    async initialise() {
        let organisation: Organisation;
        let userOrgRole: string;
        let invitationList: any[] = [];
        if (this.request.organisationId) {
            console.log('initialising user with org');
            const org = await clerkClient.organizations.getOrganization({organizationId: this.request.organisationId});
            organisation = await this.organisationService.findOrCreateByAuthId({
                name: org.name,
                authServiceId: this.request.organisationId
            });
            userOrgRole = await this.getUserRoleFromCurrentOrg(organisation);
            invitationList = await clerkClient.organizations.getOrganizationInvitationList({
                organizationId: this.request.organisationId,
                status: ['accepted']
            })
        }
        const authUser = await clerkClient.users.getUser(this.request.userId)
        let user = await this.userRepository.findOneByAuthId(authUser.id);
        const userInvitation = invitationList.find((invitation) => invitation.emailAddress === authUser.emailAddresses[0].emailAddress);
        if (!user) {
            console.log('creating user');
            user = await this.userRepository.create({
                firstName: authUser.firstName,
                lastName: authUser.lastName,
                email: authUser.emailAddresses[0].emailAddress,
                authServiceId: authUser.id,
            });
        }
        const varifyRole = userOrgRole === 'org:admin' ? "ADMIN" : userInvitation?.publicMetadata['varify_role'] ?? "MEMBER";
        console.log('varifyRole', varifyRole);
        console.log('updating user');
        await clerkClient.users.updateUserMetadata(user.authServiceId, {
            publicMetadata: {
                ...authUser.publicMetadata,
                varify_role: varifyRole,
                synex_initialised: true
            }
        })
        return true;
    }

    async isUserInitialised() {
        const [organisation, user] = await Promise.all([
            this.organisationRepository.findOneByAuthId(this.request.organisationId),
            this.userRepository.findOneByAuthId(this.request.userId),
        ]);
        return !(!organisation || !user);
    }

    getUserRoleFromCurrentOrg = async (organisation: Organisation) => {
        const authOrgMemberships = await clerkClient.users.getOrganizationMembershipList({userId: this.request.userId});
        const userOrg = authOrgMemberships.find((membership) => membership.organization.id === organisation.authServiceId);
        return userOrg.role;
    }


}
