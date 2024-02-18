import {Inject, Injectable} from "@nestjs/common";
import {ORM} from "../drizzle/drizzle.module";
import {NodePgDatabase} from "drizzle-orm/node-postgres";
import * as schema from "../drizzle/schema";
import {eq} from "drizzle-orm";
import {NewSubscription, subscription} from "../drizzle/schema";

@Injectable()
export class SubscriptionRepository {
    constructor(@Inject(ORM) private db: NodePgDatabase<typeof schema>) {
    }

    async findOneByExternalProductId(id: string) {
        const _sub = await this.db.select().from(subscription).where(eq(subscription.externalProductId, id));
        return _sub[0];
    }

    async create(input: NewSubscription) {
        const _sub = await this.db.insert(subscription).values([input]).returning();
        return _sub[0];
    }
}