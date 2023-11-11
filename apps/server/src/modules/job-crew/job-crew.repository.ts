import {Inject, Injectable} from "@nestjs/common";
import {ORM} from "../../drizzle/drizzle.module";
import {NodePgDatabase} from "drizzle-orm/node-postgres";
import * as schema from "../../drizzle/schema";
import {and, eq, inArray, sql} from "drizzle-orm";
import {job, jobCrew, NewJobCrew} from "../../drizzle/schema";

@Injectable()
export class JobCrewRepository {
    constructor(@Inject(ORM) private db: NodePgDatabase<typeof schema>) {
    }

    async findJobCrewByJobId(jobId: string) {
        return await this.db.query.jobCrew.findMany({
            with: {
                crewMember: true,
            },
            where: eq(jobCrew.jobId, jobId),
        })
    }

    async deleteManyByJobIdAndCrewIds(jobId: string, ids: string[]) {
        await this.db.delete(jobCrew).where(and(
            eq(jobCrew.jobId, jobId),
            inArray(jobCrew.crewMemberId, ids)
        ))
    }

    async deleteManyById(ids: string[]) {
        await this.db.delete(jobCrew).where(
            inArray(jobCrew.id, ids),
        )
    }

    async createMany(input: NewJobCrew[]) {
        await this.db.insert(jobCrew).values(input)
    }


}
