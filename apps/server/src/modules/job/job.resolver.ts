import {Args, Mutation, Parent, Query, ResolveField, Resolver} from '@nestjs/graphql';
import {JobService} from './job.service';
import {Job} from './entities/job.entity';
import {CreateJobInput} from './dto/create-job.input';
import {UpdateJobInput} from './dto/update-job.input';
import {JwtAuthGuard} from '../auth/jwt-auth.guards';
import {UseGuards} from '@nestjs/common';
import {JobSearchInput} from './dto/search-job.input';
import {JobRecord} from "../job-record/entities/job-record.entity";
import {JobRecordService} from "../job-record/job-record.service";

@Resolver(() => Job)
export class JobResolver {
    constructor(
        private readonly jobService: JobService,
        private readonly variationService: JobRecordService,
    ) {
    }

    @UseGuards(JwtAuthGuard)
    @Mutation(() => Job)
    createJob(@Args('createJobInput') createJobInput: CreateJobInput) {
        return this.jobService.create(createJobInput);
    }

    @UseGuards(JwtAuthGuard)
    @Query(() => [Job])
    searchJobs(@Args('jobSearchInput') searchInput: JobSearchInput) {
        return this.jobService.search(searchInput);
    }

    @Query(() => Job, {name: 'job'})
    job(@Args('id', {type: () => String}) id: string) {
        return this.jobService.findOne(id);
    }
    @UseGuards(JwtAuthGuard)
    @Mutation(() => Job)
    updateJob(@Args('updateJobInput') updateJobInput: UpdateJobInput) {
        return this.jobService.update(updateJobInput.id, updateJobInput);
    }

    @UseGuards(JwtAuthGuard)
    @Mutation(() => Boolean)
    deleteJob(@Args('id', {type: () => String}) id: string) {
        return this.jobService.delete(id);
    }


    @ResolveField(() => [JobRecord])
    variations(@Parent() job: Job) {
        const {id} = job;
        return this.variationService.findJobVariations(id);
    }
}
