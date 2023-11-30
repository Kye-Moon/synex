import {Inject, Injectable} from '@nestjs/common';
import {ORM} from '../../drizzle/drizzle.module';
import {NodePgDatabase} from 'drizzle-orm/node-postgres';
import * as schema from '../../drizzle/schema';
import {Job, job, NewJob, UpdateJob, variation} from '../../drizzle/schema';
import {eq, like, or} from 'drizzle-orm';
import {JobSearchInput} from './dto/search-job.input';

@Injectable()
export class JobRepository {
    constructor(@Inject(ORM) private db: NodePgDatabase<typeof schema>) {
    }

    async createJob(newJobInput: NewJob): Promise<Job> {
        const _job = await this.db.insert(job).values([newJobInput]).returning();
        return _job[0];
    }

    /**
     * Find all jobs that an admin user has access to
     * No inclusions
     * @param userId
     */
    async findAllByOwnerId({userId}: { userId: string }): Promise<Job[]> {
        return await this.db.query.job.findMany({
            where: eq(job.ownerId, userId),
        });
    }

    async search(searchInput: JobSearchInput): Promise<Job[]> {
        return await this.db.query.job.findMany({
            where: or(
                searchInput.ownerId && eq(job.ownerId, searchInput.ownerId),
                searchInput.customerName &&
                like(job.customerName, searchInput.customerName),
            ),
            with: {
                ...(searchInput.includeOwner ? {owner: true} : {}),
            },
        });
    }

    async findOne(id: string): Promise<Job> {
        return await this.db.query.job.findFirst({
            where: eq(job.id, id),
        });
    }

    async update(id: string, updateJobInput: UpdateJob): Promise<Job> {
        const _job = await this.db.update(job).set({
            title: updateJobInput.title,
            description: updateJobInput.description,
            customerName: updateJobInput.customerName,
            status: updateJobInput.status,
            dueDate: updateJobInput.dueDate,
        }).where(eq(job.id, id)).returning();
        return _job[0];
    }

    async findByVariationId(variationId: string):Promise<Job> {
        const _job =   this.db.query.job.findFirst({
            where: eq(job.id, variationId),
        });
        return null
    }
}
