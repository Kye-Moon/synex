import {forwardRef, Inject, Injectable, Scope} from '@nestjs/common';
import {CreateJobInput} from './dto/create-job.input';
import {UpdateJobInput} from './dto/update-job.input';
import {JobRepository} from './job.repository';
import {RequestService} from '../request/request.service';
import {ORM} from '../../drizzle/drizzle.module';
import {NodePgDatabase} from 'drizzle-orm/node-postgres';
import * as schema from '../../drizzle/schema';
import {Job} from '../../drizzle/schema';
import {JobSearchInput} from './dto/search-job.input';
import {JobCrewService} from "../job-crew/job-crew.service";

@Injectable()
export class JobService {
    constructor(
        private readonly jobRepository: JobRepository,
        private readonly request: RequestService,
        private readonly jobCrewService: JobCrewService,
        @Inject(ORM) private db: NodePgDatabase<typeof schema>,
    ) {
    }

    async create(createJobInput: CreateJobInput) {
        return await this.jobRepository.createJob({
            ...createJobInput,
            ownerId: this.request.userId,
        });
    }

    /**
     * Search jobs
     * Currently only allows you to see jobs you own
     * @param searchInput
     */
    async search(searchInput: JobSearchInput): Promise<Job[]> {
        searchInput.ownerId = this.request.userId;
        return await this.jobRepository.search(searchInput);
    }

    async findOne(id: string) {
        //TODO - check if user has access to this job
        return await this.jobRepository.findOne(id);
    }

    async update(id: string, updateJobInput: UpdateJobInput) {

        const existingJob = await this.jobRepository.findOne(id);
        if (!existingJob) throw new Error('Job not found');
        const job = await this.jobRepository.update(id, updateJobInput);
        if (updateJobInput.crew.length > 0) {
            await this.jobCrewService.update(job.id, updateJobInput.crew);
        }
        return job;
    }

    remove(id: string) {
        return `This action removes a #${id} job`;
    }
}
