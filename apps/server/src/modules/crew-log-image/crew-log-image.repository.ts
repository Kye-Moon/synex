import {Inject, Injectable} from "@nestjs/common";
import {ORM} from "../../drizzle/drizzle.module";
import {NodePgDatabase} from "drizzle-orm/node-postgres";
import * as schema from "../../drizzle/schema";
import {crewLogImage, NewCrewLogImage} from "../../drizzle/schema";

@Injectable()
export class CrewLogImageRepository {

    constructor(@Inject(ORM) private db: NodePgDatabase<typeof schema>) {
    }

    async create (input: NewCrewLogImage) {
        const _crewLogImage = await this.db.insert(crewLogImage).values([input]).returning()
        return _crewLogImage[0]
    }

}