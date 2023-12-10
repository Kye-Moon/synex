import {Inject, Injectable} from "@nestjs/common";
import {ORM} from "../../drizzle/drizzle.module";
import {NodePgDatabase} from "drizzle-orm/node-postgres";
import * as schema from "../../drizzle/schema";
import {NewVariationResource, variationResource} from "../../drizzle/schema";
import {eq} from "drizzle-orm";

@Injectable()
export class VariationResourceRepository {
    constructor(@Inject(ORM) private db: NodePgDatabase<typeof schema>) {
    }

    async create(input: NewVariationResource) {
        const _variationResource = await this.db.insert(variationResource).values([input]).returning()
        return _variationResource[0]
    }

    async update(id: string, input: Partial<NewVariationResource>) {
        const _variationResource = await this.db.update(variationResource).set(input).where(eq(variationResource.id, id)).returning()
        return _variationResource[0]
    }

    async findVariationResources(id: string) {
        return await this.db.query.variationResource.findMany({
            where: eq(variationResource.variationId, id)
        })
    }

    // async findGroupedVariationResources(id: string) {
    //     const result = await this.db.select({
    //         type: variationResource.type,
    //         variationId: variationResource.variationId,
    //     }).from(variationResource).where(eq(variationResource.variationId, id)).groupBy(variationResource.type, variationResource.variationId)
    //     console.log(result)
    // }

     async delete(id: string) {
         const result = await this.db.delete(variationResource).where(eq(variationResource.id, id)).returning();
         return result[0];
     }
}