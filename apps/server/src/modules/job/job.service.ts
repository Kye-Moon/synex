import { Inject, Injectable, Scope } from '@nestjs/common';
import { CreateJobInput } from './dto/create-job.input';
import { UpdateJobInput } from './dto/update-job.input';
import { JobRepository } from './job.repository';
import { RequestService } from '../request/request.service';
import { ORM } from '../../drizzle/drizzle.module';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { Job } from '../../drizzle/schema';
import * as schema from '../../drizzle/schema';
import { JobSearchInput } from './dto/search-job.input';

@Injectable({ scope: Scope.REQUEST })
export class JobService {
  constructor(
    private readonly jobRepository: JobRepository,
    private readonly request: RequestService,
    @Inject(ORM) private db: NodePgDatabase<typeof schema>,
  ) {}

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
    const job = await this.jobRepository.findOne(id);
    //TODO - check if user has access to this job
    return job;
  }

  update(id: string, updateJobInput: UpdateJobInput) {
    return `This action updates a #${id} job`;
  }

  remove(id: string) {
    return `This action removes a #${id} job`;
  }
}
