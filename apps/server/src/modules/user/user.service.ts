import {Injectable} from '@nestjs/common';
import {CreateUserInput} from './dto/create-user.input';
import {UpdateUserInput} from './dto/update-user.input';
import {User} from './entities/user.entity';
import {UserRepository} from './user.repository';
import {RequestService} from '../request/request.service';
import {SearchUserInput} from "./dto/search-user.input";
import {SmsService} from "../sms/sms.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
    constructor(
        private readonly request: RequestService,
        private readonly userRepository: UserRepository,
        private readonly smsService: SmsService
    ) {
    }

    async create(createUserInput: CreateUserInput): Promise<User> {
        createUserInput.email = createUserInput.email.toLowerCase();
        return await this.userRepository.createUser({
            ...createUserInput,
            organisationId: this.request.organisationId,
            status: createUserInput.status || "ACTIVE"
        });
    }

    async inviteUser(createUserInput: CreateUserInput): Promise<User> {
        createUserInput.status = "INVITED";
        const inviter = await this.userRepository.findOneByIdWithOrganisation(this.request.userId);
        const user = await this.create(createUserInput)
        const password = this.generatePassword();
        await this.smsService.SendInviteSMS({phoneNumber: user.phone, tempPassword: password, email: user.email, inviterOrgName: inviter.organisation.name, inviterName: inviter.name})
        const hash = await bcrypt.hash(password, 10);
        await this.userRepository.updateUser(user.id, {password: hash});
        return user;
    }

    async search(searchInput: SearchUserInput): Promise<User[]> {
        searchInput.organisationId = this.request.organisationId;
        return await this.userRepository.search(searchInput);
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    async update(id: string, updateUserInput: UpdateUserInput) {
        const user = await this.userRepository.findOneById(id);
        if (user) {
            return await this.userRepository.updateUser(id, updateUserInput);
        }
        return null;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
    generatePassword(): string {
        const uppercaseChars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercaseChars: string = 'abcdefghijklmnopqrstuvwxyz';
        const specialChars: string = '!@#$%';

        let password: string = '';

        // Generate random characters
        const randomUppercase = uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
        const randomLowercase = lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
        const randomSpecialChar = specialChars[Math.floor(Math.random() * specialChars.length)];
        const randomDigit1 = Math.floor(Math.random() * 10).toString();
        const randomDigit2 = Math.floor(Math.random() * 10).toString();
        const randomDigit3 = Math.floor(Math.random() * 10).toString();

        // Form the password with at least one uppercase, one lowercase, and one special character
        password = `${randomUppercase}${randomLowercase}${randomSpecialChar}${randomDigit1}${randomDigit2}${randomDigit3}`;

        // Shuffle the password characters to randomize
        password = password.split('').sort(() => Math.random() - 0.5).join('');

        return password;
    }
}
