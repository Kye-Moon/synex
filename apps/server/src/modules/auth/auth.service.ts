import { Inject, Injectable, Scope } from '@nestjs/common';
import { LoginInput } from './dto/login.input';
import * as bcrypt from 'bcrypt';
import { User } from '../user/entities/user.entity';
import { ConfigService } from '@nestjs/config';
import { CreateUserInput } from '../user/dto/create-user.input';

import * as jwt from 'jsonwebtoken';
import { RefreshTokenInput } from './dto/refreshTokenInput';
import { LoginResponse } from './dto/login-response';
import { UserRepository } from '../user/user.repository';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private readonly configService: ConfigService,
  ) {}

  async validateUser(loginInput: LoginInput) {
    const { phoneNumber, password } = loginInput;
    const user = await this.userRepository.findOneByPhone(phoneNumber);

    const hash = await bcrypt.hash(password, 10);
    // CHECK IF THE PASSWORD IS VALID
    const isMatch = bcrypt.compare(password, hash);
    //
    if (!isMatch) {
      throw new Error('Password is invalid');
    }
    return user;
  }

  // auth.service.ts
  login(user: User): LoginResponse {
    const payload = {
      sub: String(user.id),
      name: user.name,
      phone: user.phone,
    };

    return {
      access_token: jwt.sign(payload, this.configService.get('JWT_SECRET'), {
        expiresIn: '1d',
      }),
    };
  }

  /**
   * Signup a new user and encrypt the password
   * @param payload
   */
  async signup(payload: CreateUserInput) {
    // // CHECK IF THE USER ALREADY EXISTS
    // // const user = await this.userRepository.findOne({
    // //   phoneNumber: payload.phoneNumber,
    // //   password: payload.password,
    // // });
    //
    // if (user) {
    //   throw new Error('User already exists, login instead');
    // }
    //
    // // GENERATE HASH PASSWORD TO SAVE
    // const hash = await bcrypt.hash(payload.phoneNumber, 10);
    // const newUser = this.userRepository.create({
    //   phoneNumber: payload.phoneNumber,
    //   password: hash,
    //   name: payload.name,
    // });
    // await this.em.persistAndFlush(newUser);
    // return newUser;
  }

  async refreshAccessToken(input: RefreshTokenInput) {
    jwt.verify(input.refreshToken, this.configService.get('JWT_SECRET'));

    // const user = await this.userService.findOne(input._id);

    // if (!user) {
    //   throw new Error('User not found');
    // }
    //
    // const payload = {
    //   email: user.email,
    //   name: user.name,
    //   sub: user._id,
    // };
    //
    // return {
    //   user,
    //   authToken: jwt.sign(payload, this.configService.get('JWT_SECRET'), {
    //     expiresIn: '20sec',
    //   }),
    //   refreshToken: jwt.sign(payload, this.configService.get('JWT_SECRET'), {
    //     expiresIn: '7d',
    //   }),
    // };
  }
}
