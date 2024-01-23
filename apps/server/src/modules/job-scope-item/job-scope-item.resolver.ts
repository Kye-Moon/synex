import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {JobScopeItemService} from './job-scope-item.service';
import {JobScopeItem} from './entities/job-scope-item.entity';
import {CreateJobScopeItemInput} from './dto/create-job-scope-item.input';
import {UpdateJobScopeItemInput} from './dto/update-job-scope-item.input';

@Resolver(() => JobScopeItem)
export class JobScopeItemResolver {
    constructor(private readonly jobScopeItemService: JobScopeItemService) {
    }

    @Mutation(() => JobScopeItem)
    createJobScopeItem(@Args('createJobScopeItemInput') createJobScopeItemInput: CreateJobScopeItemInput) {
        return this.jobScopeItemService.create(createJobScopeItemInput);
    }

    @Mutation(() => JobScopeItem)
    updateJobScopeItem(@Args('updateJobScopeItemInput') updateJobScopeItemInput: UpdateJobScopeItemInput) {
        return this.jobScopeItemService.update(updateJobScopeItemInput.id, updateJobScopeItemInput);
    }

    @Mutation(() => JobScopeItem)
    removeJobScopeItem(@Args('id', {type: () => String}) id: string) {
        return this.jobScopeItemService.remove(id);
    }

    @Query(() => [JobScopeItem])
    jobScopeItems(@Args('jobId', {type: () => String}) jobId: string) {
        return this.jobScopeItemService.findByJobId(jobId);
    }
}
