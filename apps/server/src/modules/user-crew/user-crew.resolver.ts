import {Resolver, Query, Mutation, Args, Int} from '@nestjs/graphql';
import {UserCrewService} from './user-crew.service';
import {UserCrew} from './entities/user-crew.entity';
import {CreateUserCrewInput} from './dto/create-user-crew.input';
import {UpdateUserCrewInput} from './dto/update-user-crew.input';
import {UseGuards} from "@nestjs/common";
import {JwtAuthGuard} from "../auth/jwt-auth.guards";
import {UserCrewResponse} from "./dto/user-crew.response";

@Resolver(() => UserCrew)
export class UserCrewResolver {
    constructor(private readonly userCrewService: UserCrewService) {
    }

    @UseGuards(JwtAuthGuard)
    @Mutation(() => UserCrew)
    createUserCrew(@Args('createUserCrewInput') createUserCrewInput: CreateUserCrewInput) {
        return this.userCrewService.create(createUserCrewInput);
    }

    @UseGuards(JwtAuthGuard)
    @Query(() => [UserCrewResponse], {name: 'userCrew'})
    findAll() {
        return this.userCrewService.findAll();
    }

    @Mutation(() => UserCrew)
    removeUserCrew(@Args('id', {type: () => Int}) id: number) {
        return this.userCrewService.remove(id);
    }
}
