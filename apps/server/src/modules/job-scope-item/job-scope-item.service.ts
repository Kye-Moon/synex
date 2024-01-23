import {Injectable} from '@nestjs/common';
import {CreateJobScopeItemInput} from './dto/create-job-scope-item.input';
import {UpdateJobScopeItemInput} from './dto/update-job-scope-item.input';
import {RequestService} from "../request/request.service";
import {JobScopeItemRepository} from "./job-scope-item.repository";

@Injectable()
export class JobScopeItemService {
    constructor(
        private readonly jobScopeItemRepository: JobScopeItemRepository,
        private readonly request: RequestService,
    ) {
    }

    async create(createJobScopeItemInput: CreateJobScopeItemInput) {
        return await this.jobScopeItemRepository.create(createJobScopeItemInput)
    }

    async findByJobId(jobId: string) {
        return this.jobScopeItemRepository.findByJobId(jobId);
    }

    findOne(id: string) {
        return this.jobScopeItemRepository.findOne(id);
    }

    async update(id: string, updateJobScopeItemInput: UpdateJobScopeItemInput) {
        return await this.jobScopeItemRepository.update(id, updateJobScopeItemInput)
    }

    async remove(id: string) {
        return await this.jobScopeItemRepository.delete(id)
    }
}
