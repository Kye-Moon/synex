import {Inject, Injectable} from "@nestjs/common";
import {ORM} from "../../drizzle/drizzle.module";
import {NodePgDatabase} from "drizzle-orm/node-postgres";
import * as schema from "../../drizzle/schema";
import {
    job,
    jobCrew,
    NewVariation,
    UpdateVariation,
    User,
    variation,
    variationImage,
    variationInitialData
} from "../../drizzle/schema";
import {and, asc, desc, eq, or} from "drizzle-orm";
import {VariationSearchInput} from "./dto/search-variation";

@Injectable()
export class VariationRepository {
    constructor(@Inject(ORM) private db: NodePgDatabase<typeof schema>) {
    }

    async create(input: NewVariation) {
        const _variation = await this.db.insert(variation).values([input]).returning()
        return _variation[0]
    }

    /**
     * Find all variations that a user has access to
     * A user has access to a variation if they are the owner of the job or a crew member on the job that the variation belongs to
     * @param userId
     * @param searchInput
     */
    async search({userId, searchInput}: { userId: string, searchInput?: VariationSearchInput }) {
        return await this.db.select()
            .from(variation)
            .leftJoin(job, (eq(variation.jobId, job.id)))
            .leftJoin(jobCrew, (eq(job.id, jobCrew.jobId)))
            .where(and(
                or(
                    eq(job.ownerId, userId),
                    eq(jobCrew.crewMemberId, userId)
                ),
                ...(searchInput.jobId ? [eq(variation.jobId, searchInput.jobId)] : [])
            )).limit(searchInput.limit).orderBy(asc(variation.createdAt))
    }

    async findOne(id: string) {
        return await this.db.query.variation.findFirst({
            where: eq(variation.id, id),
        });
    }

    async findVariationJob(variationId: string) {
        const _variation = await this.db.query.variation.findFirst({
            where: eq(variation.id, variationId),
            with: {
                job: true
            }
        })
        return _variation.job
    }

    async findVariationSubmittedBy(variationId: string): Promise<User> {
        const _variation = await this.db.query.variation.findFirst({
            where: eq(variation.id, variationId),
            with: {
                submittedBy: true
            }
        })
        return _variation.submittedBy
    }

    async findVariationInitialData(variationId: string) {
        return await this.db.query.variationInitialData.findFirst({
            where: eq(variationInitialData.variationId, variationId),
        })
    }

    async findVariationImages(variationId: string) {
        return await this.db.query.variationImage.findMany({
            where: eq(variationImage.variationId, variationId),
        })
    }

    async findVariationResources(variationId: string) {
        return await this.db.query.variationResource.findMany({
            where: eq(variationImage.variationId, variationId),
        })
    }


    async update(id: string, input: UpdateVariation) {
        const _variation = await this.db.update(variation).set({...input}).where(eq(variation.id, id)).returning()
        return _variation[0]
    }

    async findByJobId(jobId: string) {
        return await this.db.query.variation.findMany({
            where: eq(variation.jobId, jobId),
        });
    }

}
