import {Inject, Injectable} from "@nestjs/common";
import {ORM} from "../../drizzle/drizzle.module";
import {NodePgDatabase} from "drizzle-orm/node-postgres";
import * as schema from "../../drizzle/schema";
import {NewVariation, variation} from "../../drizzle/schema";

@Injectable()
export class VariationRepository {
    constructor(@Inject(ORM) private db: NodePgDatabase<typeof schema>) {}

    async create(input: NewVariation) {
        const _variation = await this.db.insert(variation).values([input]).returning()
        return _variation[0]
    }



}
