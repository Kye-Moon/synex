import {Injectable} from '@nestjs/common';
import {CreateJobAttachmentsInput} from './dto/create-job-attachment.input';
import {JobAttachmentRepository} from "./job-attachment.repository";

@Injectable()
export class JobAttachmentService {

    constructor(
        private readonly jobAttachmentRepository: JobAttachmentRepository,
    ) {
    }

    async createMany(createJobAttachmentInput: CreateJobAttachmentsInput) {
        const {jobId} = createJobAttachmentInput;

        const attachments = createJobAttachmentInput.attachments.map((attachment) => {
            const {name, url, type} = attachment;
            return {
                jobId,
                name,
                url,
                type,
            };
        });
        return this.jobAttachmentRepository.createMany(attachments);
    }

    findAllByJobId(jobId: string) {
        return this.jobAttachmentRepository.findAllByJobId(jobId);
    }

    findOne(id: number) {
        return `This action returns a #${id} jobAttachment`;
    }

    async remove(id: string) {
        const result = await this.jobAttachmentRepository.deleteById(id);
        if (result.rowCount > 0) {
            return true;
        } else throw new Error('Error deleting attachment');
    }
}
