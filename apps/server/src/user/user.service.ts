import {Injectable} from '@nestjs/common';
import {UserRepository} from "./user.repository";
import {NewUser} from "../drizzle/schema";

@Injectable()
export class UserService {
    constructor(
        private readonly userRepository: UserRepository,
    ) {
    }

    async findOrCreateByAuthServiceId(input: NewUser) {
        const user = await this.userRepository.findOneByAuthServiceId(input.authServiceId);
        if (user) {
            return user;
        }
        return await this.userRepository.create(input);
    }


}
