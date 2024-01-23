import {Resolver, Query, Mutation, Args, Int} from '@nestjs/graphql';
import {JobAttachmentService} from './job-attachment.service';
import {JobAttachment} from './entities/job-attachment.entity';
import {CreateJobAttachmentsInput} from './dto/create-job-attachment.input';

@Resolver(() => JobAttachment)
export class JobAttachmentResolver {
    constructor(private readonly jobAttachmentService: JobAttachmentService) {
    }

    @Mutation(() => [JobAttachment])
    createJobAttachments(@Args('createJobAttachmentInput') createJobAttachmentInput: CreateJobAttachmentsInput) {
        return this.jobAttachmentService.createMany(createJobAttachmentInput);
    }

    @Query(() => [JobAttachment])
    jobAttachments(@Args('jobId', {type: () => String}) jobId: string) {
        return this.jobAttachmentService.findAllByJobId(jobId);
    }

    @Query(() => JobAttachment, {name: 'jobAttachment'})
    findOne(@Args('id', {type: () => Int}) id: number) {
        return this.jobAttachmentService.findOne(id);
    }

    @Mutation(() => Boolean)
    removeJobAttachment(@Args('id', {type: () => String}) id: string) {
        return this.jobAttachmentService.remove(id);
    }
}
