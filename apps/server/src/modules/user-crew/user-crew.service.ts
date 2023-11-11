import {Injectable} from '@nestjs/common';
import {CreateUserCrewInput} from './dto/create-user-crew.input';
import {UpdateUserCrewInput} from './dto/update-user-crew.input';
import {RequestService} from "../request/request.service";
import {UserRepository} from "../user/user.repository";
import {UserCrewRepository} from "./user-crew.repository";
import {UserCrewResponse} from "./dto/user-crew.response";

@Injectable()
export class UserCrewService {
    constructor(
        private readonly request: RequestService,
        private readonly userRepository: UserRepository,
        private readonly userCrewRepository: UserCrewRepository,
    ) {
    }

    /**
     * Create a new user crew
     * If the user does not exist, create it before creating the user crew record
     * @param createUserCrewInput
     */
    async create(createUserCrewInput: CreateUserCrewInput) {
        let crewMember = await this.userRepository.findOneByPhone(createUserCrewInput.phone);
        if (!crewMember) {
            crewMember = await this.userRepository.createUser({
                ...createUserCrewInput,
                isCrewMember: true,
            })
        }

        const currentUserId = this.request.userId;

        return await this.userCrewRepository.createUserCrew({
            userId: currentUserId,
            crewMemberId: crewMember.id,
        });
    }

    /**
     * Find all crew members for the current user
     */
    async findAll() {
        const userCrew = await this.userCrewRepository.findUserCrewByUserId(this.request.userId);
        return userCrew.map((userCrew): UserCrewResponse => {
            return {
                id: userCrew.crewMember.id,
                name: userCrew.crewMember.name,
                phone: userCrew.crewMember.phone,
            }
        });
    }

    findOne(id: number) {
        return `This action returns a #${id} userCrew`;
    }

    update(id: number, updateUserCrewInput: UpdateUserCrewInput) {
        return `This action updates a #${id} userCrew`;
    }

    remove(id: number) {
        return `This action removes a #${id} userCrew`;
    }
}
