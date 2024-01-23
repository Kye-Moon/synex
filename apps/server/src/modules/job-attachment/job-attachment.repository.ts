import {Inject, Injectable} from "@nestjs/common";
import {ORM} from "../../drizzle/drizzle.module";
import {NodePgDatabase} from "drizzle-orm/node-postgres";
import * as schema from "../../drizzle/schema";
import {jobAttachment, NewJobAttachment} from "../../drizzle/schema";
import {eq} from "drizzle-orm";

@Injectable()
export class JobAttachmentRepository {
    constructor(@Inject(ORM) private db: NodePgDatabase<typeof schema>) {
    }

    async createMany(attachments: NewJobAttachment[]) {
        return this.db.insert(jobAttachment).values(attachments).returning();
    }

    async findAllByJobId(jobId: string) {
        return this.db.select().from(jobAttachment).where(eq(jobAttachment.jobId, jobId))
    }

    async deleteById(id: string) {
        return this.db.delete(jobAttachment).where(eq(jobAttachment.id, id));
    }
}