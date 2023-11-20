import {Inject, Injectable} from "@nestjs/common";
import {ORM} from "../../drizzle/drizzle.module";
import {NodePgDatabase} from "drizzle-orm/node-postgres";
import * as schema from "../../drizzle/schema";
import {NewVariationInitialData, variationInitialData} from "../../drizzle/schema";

@Injectable()
export class VariationInitialDataRepository {
    constructor(@Inject(ORM) private db: NodePgDatabase<typeof schema>) {
    }

    async create(input: NewVariationInitialData) {
        const result = await this.db.insert(variationInitialData).values(input).returning()
        return result[0]
    }
}
