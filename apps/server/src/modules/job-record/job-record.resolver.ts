import {Args, Int, Mutation, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import {JobRecordService} from './job-record.service';
import {JobRecord} from './entities/job-record.entity';
import {CreateJobRecordInput} from './dto/create-job-record.input';
import {UpdateJobRecordInput} from './dto/update-job-record.input';
import {UseGuards} from "@nestjs/common";
import {JwtAuthGuard} from "../auth/jwt-auth.guards";
import {Job} from "../job/entities/job.entity";
import {User} from "../user/entities/user.entity";
import {JobRecordSearchInput} from "./dto/search-job-record";
import {VariationInitialData} from "../variation-initial-data/entities/variation-initial-data.entity";
import {JobRecordImage} from "../job-record-image/entities/job-record-image.entity";
import {VariationResource} from "../variation-resource/entities/variation-resource.entity";
import {JobScopeItem} from "../job-scope-item/entities/job-scope-item.entity";
import {JobScopeItemService} from "../job-scope-item/job-scope-item.service";

@Resolver(() => JobRecord)
export class JobRecordResolver {
    constructor(
        private readonly jobRecordService: JobRecordService,
        private readonly jobScopeItemService: JobScopeItemService
    ) {
    }

    @UseGuards(JwtAuthGuard)
    @Mutation(() => JobRecord)
    createJobRecord(@Args('createJobRecordInput') createJobRecordInput: CreateJobRecordInput) {
        return this.jobRecordService.create(createJobRecordInput);
    }

    @UseGuards(JwtAuthGuard)
    @Query(() => [JobRecord], {name: 'searchJobRecords'})
    async searchJobRecords(@Args('jobRecordSearchInput') jobRecordSearchInput: JobRecordSearchInput) {
        return await this.jobRecordService.search(jobRecordSearchInput);
    }

    @UseGuards(JwtAuthGuard)
    @Query(() => JobRecord, {name: 'jobRecord'})
    findOne(@Args('id', {type: () => String}) id: string) {
        return this.jobRecordService.findOne(id);
    }

    @UseGuards(JwtAuthGuard)
    @Mutation(() => JobRecord)
    async updateJobRecord(@Args('updateJobRecordInput') updateJobRecordInput: UpdateJobRecordInput) {
        return await this.jobRecordService.update(updateJobRecordInput.id, updateJobRecordInput);
    }

    @Mutation(() => JobRecord)
    removeVariation(@Args('id', {type: () => Int}) id: number) {
        return this.jobRecordService.remove(id);
    }

    @ResolveField(() => Job)
    async job(@Parent() variation: JobRecord) {
        const {id} = variation;
        return this.jobRecordService.getVariationJob(id);
    }

    @ResolveField(() => User)
    async submittedBy(@Parent() user: User) {
        const {id} = user;
        return this.jobRecordService.getVariationSubmittedBy(id);
    }

    @ResolveField(() => VariationInitialData)
    async initialData(@Parent() variation: JobRecord) {
        const {id} = variation;
        return await this.jobRecordService.getVariationInitialData(id);
    }

    @ResolveField(() => [JobRecordImage])
    async images(@Parent() variation: JobRecord) {
        const {id} = variation;
        return await this.jobRecordService.getVariationImages(id);
    }

    @ResolveField(() => [VariationResource])
    async resources(@Parent() variation: JobRecord) {
        const {id} = variation;
        return await this.jobRecordService.getVariationResources(id);
    }

    @ResolveField(() => JobScopeItem)
    async scopeItem(@Parent() variation: JobRecord) {
        const {scopeRef} = variation;
        return await this.jobScopeItemService.findOne(scopeRef);
    }

}
