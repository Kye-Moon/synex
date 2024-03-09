import {Inject, Injectable} from "@nestjs/common";
import {ORM} from "../drizzle/drizzle.module";
import {NodePgDatabase} from "drizzle-orm/node-postgres";
import * as schema from '../drizzle/schema';
import {NewUser, user} from '../drizzle/schema';
import {eq} from "drizzle-orm";

@Injectable()
export class UserRepository {
    constructor(@Inject(ORM) private db: NodePgDatabase<typeof schema>) {
    }

    async findOneByAuthId(authServiceId: string) {
        const _user = await this.db
            .select()
            .from(user)
            .where(eq(user.authServiceId, authServiceId));
        return _user[0];
    }

    async create(input: NewUser) {
        const _user = await this.db
            .insert(user)
            .values([input])
            .returning();
        return _user[0];
    }
}
