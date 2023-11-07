import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login-response';

import { LoginInput } from './dto/login.input';
import { GqlAuthGuard } from './gql-auth.guards';
import { User } from '../user/entities/user.entity';
import { CreateUserInput } from '../user/dto/create-user.input';
import { RefreshTokenResponse } from './dto/refresh-token-response';
import { RefreshTokenInput } from './dto/refreshTokenInput';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  login(
    @Args('loginUserInput') loginUserInput: LoginInput,
    @Context() context: any,
  ) {
    console.log('loginUserInput', loginUserInput);
    const token = this.authService.login(context.user);
    context.res.cookie('access_token', token.access_token, {
      httpOnly: true,
    });
    return token;
  }

  @Mutation(() => User)
  signup(@Args('signupInput') signupInput: CreateUserInput) {
    return this.authService.signup(signupInput);
  }

  @Mutation(() => RefreshTokenResponse)
  refreshAccessToken(
    @Args('refreshTokenInput') refreshTokenInput: RefreshTokenInput,
  ) {
    return this.authService.refreshAccessToken(refreshTokenInput);
  }
}
