import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { JobCrewService } from './job-crew.service';
import { JobCrewMember } from './entities/job-crew.entity';
import { CreateJobCrewInput } from './dto/create-job-crew.input';
import { UpdateJobCrewInput } from './dto/update-job-crew.input';

@Resolver(() => JobCrewMember)
export class JobCrewResolver {
  constructor(private readonly jobCrewService: JobCrewService) {}

  /**
   * Query to get all job crew members
   * @param id
   */
  @Query(() => [JobCrewMember], { name: 'jobCrew' })
  findAll(@Args('jobId', { type: () => String }) id: string) {
    return this.jobCrewService.findAll(id);
  }
}
