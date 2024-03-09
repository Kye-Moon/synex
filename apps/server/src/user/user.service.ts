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
        const org = await clerkClient.organizations.getOrganization({organizationId: this.request.organisationId});
        const organisation = await this.organisationService.findOrCreateByAuthId({
            name: org.name,
            authServiceId: this.request.organisationId
        });
        const authUser = await clerkClient.users.getUser(this.request.userId)
        let user = await this.userRepository.findOneByAuthId(authUser.id);
        const userOrgRole = await this.getUserRoleFromCurrentOrg(organisation);
        const invitationList = await clerkClient.organizations.getOrganizationInvitationList({
            organizationId: this.request.organisationId,
            status: ['accepted']
        })
        const userInvitation = invitationList.find((invitation) => invitation.emailAddress === authUser.emailAddresses[0].emailAddress);
        if (!user) {
            user = await this.userRepository.create({
                firstName: authUser.firstName,
                lastName: authUser.lastName,
                email: authUser.emailAddresses[0].emailAddress,
                authServiceId: authUser.id,
            });
        }
        const varifyRole = userOrgRole === 'org:admin' ? "ADMIN" : userInvitation?.publicMetadata['varify_role'] ?? "MEMBER";
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
