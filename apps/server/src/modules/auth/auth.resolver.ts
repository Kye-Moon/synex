import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login-response';

import { LoginInput } from './dto/login.input';
import { LoginGuard } from './login-guard';
import { User } from '../user/entities/user.entity';
import { CreateUserInput } from '../user/dto/create-user.input';
import { RefreshTokenResponse } from './dto/refresh-token-response';
import { RefreshTokenInput } from './dto/refreshTokenInput';
import {SignUpInput} from "./dto/signUp.input";

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {
  }

  @Mutation(() => LoginResponse)
  @UseGuards(LoginGuard)
  login(
      @Args('loginUserInput') loginUserInput: LoginInput,
      @Context() context: any,
  ) {
    const token = this.authService.login(context.user);
    context.res.cookie('access_token', token.access_token, {
      httpOnly: false,
    });
    return token;
  }

  @Mutation(() => LoginResponse)
  signup(@Args('signupInput') signupInput: SignUpInput) {
    return this.authService.signup(signupInput);
  }
}
