import {Inject, Injectable} from '@nestjs/common';
import {ORM} from "../../drizzle/drizzle.module";
import {NodePgDatabase} from "drizzle-orm/node-postgres";
import * as schema from "../../drizzle/schema";
import {NewVariation, NewVariationImage, variation, variationImage} from "../../drizzle/schema";

@Injectable()
export class VariationImageService {
    constructor(@Inject(ORM) private db: NodePgDatabase<typeof schema>) {
    }

    async create(input: NewVariationImage) {
        const _variationImage = await this.db.insert(variationImage).values([input]).returning()
        return _variationImage[0]
    }
}
