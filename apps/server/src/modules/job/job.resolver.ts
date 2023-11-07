import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { JobService } from './job.service';
import { Job } from './entities/job.entity';
import { CreateJobInput } from './dto/create-job.input';
import { UpdateJobInput } from './dto/update-job.input';
import { JwtAuthGuard } from '../auth/jwt-auth.guards';
import { UseGuards } from '@nestjs/common';
import { JobSearchInput } from './dto/search-job.input';

@Resolver(() => Job)
export class JobResolver {
  constructor(private readonly jobService: JobService) {}

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

  @Query(() => Job, { name: 'job' })
  job(@Args('id', { type: () => String }) id: string) {
    return this.jobService.findOne(id);
  }

  @Mutation(() => Job)
  updateJob(@Args('updateJobInput') updateJobInput: UpdateJobInput) {
    return this.jobService.update(updateJobInput.id, updateJobInput);
  }

  @Mutation(() => Job)
  removeJob(@Args('id', { type: () => String }) id: string) {
    return this.jobService.remove(id);
  }
}
