import {Injectable} from '@nestjs/common';
import {CreateJobInput} from './dto/create-job.input';
import {UpdateJobInput} from './dto/update-job.input';
import {JobRepository} from './job.repository';
import {RequestService} from '../request/request.service';
import {Job} from '../../drizzle/schema';
import {JobSearchInput} from './dto/search-job.input';
import {JobCrewService} from "../job-crew/job-crew.service";

@Injectable()
export class JobService {
    constructor(
        private readonly jobRepository: JobRepository,
        private readonly request: RequestService,
        private readonly jobCrewService: JobCrewService,
    ) {
    }
    async create(createJobInput: CreateJobInput) {
        const job = await this.jobRepository.createJob({
            ...createJobInput,
            ownerId: this.request.userId,
        });
        if (createJobInput.crew.length > 0) {
            await this.jobCrewService.update(job.id, createJobInput.crew);
        }
        return job;
    }

    /**
     * Search jobs
     * Currently only allows you to see jobs you own
     * @param searchInput
     */
    async search(searchInput: JobSearchInput): Promise<Job[]> {
        searchInput.ownerId = this.request.userId;
        const result =  await this.jobRepository.search(searchInput);
        return result.map((job) => {
            return {
                ...job.job,
            }
        })
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

    async delete(id: string) {
        return await this.jobRepository.delete(id);
    }
}
