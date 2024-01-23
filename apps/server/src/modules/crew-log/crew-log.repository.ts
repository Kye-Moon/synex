import {Inject, Injectable} from "@nestjs/common";
import {ORM} from "../../drizzle/drizzle.module";
import {NodePgDatabase} from "drizzle-orm/node-postgres";
import * as schema from "../../drizzle/schema";
import {CrewLog, crewLog, NewCrewLog} from "../../drizzle/schema";
import {eq} from "drizzle-orm";

@Injectable()
export class CrewLogRepository {
    constructor(@Inject(ORM) private db: NodePgDatabase<typeof schema>) {
    }

    async create(input: NewCrewLog) {
        const result = await this.db.insert(crewLog).values(input).returning();
        return result[0];
    }

    async update(id: string, input: Partial<CrewLog>) {
        const _crewLog = await this.db.update(crewLog).set(input).where(eq(crewLog.id, id)).returning();
        return _crewLog[0];
    }

}