import {Injectable} from '@nestjs/common';
import {LoginInput} from './dto/login.input';
import * as bcrypt from 'bcrypt';
import {User} from '../user/entities/user.entity';
import {ConfigService} from '@nestjs/config';
import {CreateUserInput} from '../user/dto/create-user.input';

import * as jwt from 'jsonwebtoken';
import {RefreshTokenInput} from './dto/refreshTokenInput';
import {LoginResponse} from './dto/login-response';
import {UserRepository} from '../user/user.repository';
import {SignUpInput} from "./dto/signUp.input";
import {OrganisationService} from "../organisation/organisation.service";
import {organisation} from "../../drizzle/schema";
import {Organisation} from "../organisation/entities/organisation.entity";
import {EmailService} from "../email/email.service";


@Injectable()
export class AuthService {
    constructor(
        private userRepository: UserRepository,
        private organisationService: OrganisationService,
        private readonly configService: ConfigService,
    ) {
    }

    async validateUser(loginInput: LoginInput) {
        const {email, password} = loginInput;
        const user = await this.userRepository.findOneByEmailWithOrganisation(email);
        if (!user) {
            throw new Error('User with this email does not exist');
        }
        const hash = await bcrypt.hash(password, 10);
        const isMatch = bcrypt.compare(password, hash);
        if (!isMatch) {
            throw new Error('Password is invalid');
        }
        return user;
    }

    login(user: { user: User, organisation: Organisation }): LoginResponse {
        const payload = {
            sub: String(user.user.id),
            name: user.user.name,
            email: user.user.email,
            role: user.user.role,
            orgId: user.organisation.id,
        };

        return {
            access_token: jwt.sign(payload, this.configService.get('JWT_SECRET'), {
                expiresIn: '1d',
            }),
            refresh_token: jwt.sign(payload, this.configService.get('JWT_SECRET'), {
                expiresIn: '7d',
            }),
            user: {
                id: user.user.id,
                name: user.user.name,
                email: user.user.email,
                role: user.user.role,
                orgId: user.organisation.id,
            }
        };
    }

    /**
     * Signup a new user and encrypt the password
     * Signs the user up as an admin of a new organisation
     * @param payload
     */
    async signup(payload: SignUpInput) {
        const {email, password} = payload;
        const user = await this.userRepository.findOneByEmail(email);
        if (user) {
            throw new Error('User already exists, login instead');
        }
        await this.checkOrganisationName(payload.organisationName);

        const hash = await bcrypt.hash("123", 10); // Change to payload.password

        const organisation = await this.organisationService.create({name: payload.organisationName});
        const newUser = await this.userRepository.createUser({
            email: payload.email,
            password: hash,
            name: payload.firstName + ' ' + payload.lastName,
            organisationId: organisation.id,
            role: 'OWNER',
            status: 'ACTIVE',
        });
        return {
            access_token: jwt.sign(payload, this.configService.get('JWT_SECRET'), {
                expiresIn: '1d',
            }),
            refresh_token: jwt.sign(payload, this.configService.get('JWT_SECRET'), {
                expiresIn: '7d',
            }),
            user: {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
            }
        };
    }

    async checkOrganisationName(name: string) {
        const org = await this.organisationService.findOneByName(name);
        if (org) {
            throw new Error('Organisation already exists, please choose another name or contact your admin to be invited to the organisation');
        }
        return true;
    }
}
