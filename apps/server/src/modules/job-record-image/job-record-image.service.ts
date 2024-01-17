import {Inject, Injectable} from '@nestjs/common';
import {ORM} from "../../drizzle/drizzle.module";
import {NodePgDatabase} from "drizzle-orm/node-postgres";
import * as schema from "../../drizzle/schema";
import {jobRecordImage, NewJobRecordImage} from "../../drizzle/schema";

@Injectable()
export class JobRecordImageService {
    constructor(@Inject(ORM) private db: NodePgDatabase<typeof schema>) {
    }

    async create(input: NewJobRecordImage) {
        const _variationImage = await this.db.insert(jobRecordImage).values([input]).returning()
        return _variationImage[0]
    }
}
