import {Resolver, Query, Mutation, Args, Int} from '@nestjs/graphql';
import {CrewLogService} from './crew-log.service';
import {CrewLog} from './entities/crew-log.entity';
import {CreateCrewLogInput} from './dto/create-crew-log.input';
import {UpdateCrewLogInput} from './dto/update-crew-log.input';
import {UseGuards} from "@nestjs/common";
import {JwtAuthGuard} from "../auth/jwt-auth.guards";

@Resolver(() => CrewLog)
export class CrewLogResolver {
    constructor(private readonly crewLogService: CrewLogService) {
    }

    @UseGuards(JwtAuthGuard)
    @Mutation(() => CrewLog)
    createCrewLog(@Args('createCrewLogInput') createCrewLogInput: CreateCrewLogInput) {
        return this.crewLogService.create(createCrewLogInput);
    }

    @Query(() => [CrewLog], {name: 'crewLog'})
    findAll() {
        return this.crewLogService.findAll();
    }

    @Query(() => CrewLog, {name: 'crewLog'})
    findOne(@Args('id', {type: () => Int}) id: number) {
        return this.crewLogService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Mutation(() => CrewLog)
    async updateCrewLog(@Args('updateCrewLogInput') updateCrewLogInput: UpdateCrewLogInput) {
        console.log(`updateCrewLogInput`, updateCrewLogInput)
        const response = await this.crewLogService.update(updateCrewLogInput.id, updateCrewLogInput);
        console.log(`response`, response)
        return response;
    }

    @Mutation(() => CrewLog)
    removeCrewLog(@Args('id', {type: () => Int}) id: number) {
        return this.crewLogService.remove(id);
    }
}
