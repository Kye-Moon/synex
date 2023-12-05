import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import {SearchUserInput} from "./dto/search-user.input";
import {UseGuards} from "@nestjs/common";
import {JwtAuthGuard} from "../auth/jwt-auth.guards";
import {JobSearchInput} from "../job/dto/search-job.input";
import {RequestService} from "../request/request.service";

@Resolver(() => User)
export class UserResolver {
  constructor(
      private readonly userService: UserService
  ) {}
  @UseGuards(JwtAuthGuard)
  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.inviteUser(createUserInput);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [User], { name: 'searchUsers' })
  searchUsers(@Args('userSearchInput') searchInput: SearchUserInput) {
    return this.userService.search(searchInput);
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.userService.remove(id);
  }
}
