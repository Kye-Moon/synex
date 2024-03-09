import {Inject, Injectable} from "@nestjs/common";
import {ORM} from "../drizzle/drizzle.module";
import {NodePgDatabase} from "drizzle-orm/node-postgres";
import * as schema from '../drizzle/schema';
import {NewOrganisation, Organisation, organisation} from '../drizzle/schema';
import {eq} from "drizzle-orm";

@Injectable()
export class OrganisationRepository {
    constructor(@Inject(ORM) private db: NodePgDatabase<typeof schema>) {
    }

    async findOneById(id: string) {
        const _organisation = await this.db
            .select()
            .from(organisation)
            .where(eq(organisation.id, id));
        return _organisation[0];
    }

    async findOneByAuthId(id: string) {
        const _organisation = await this.db
            .select()
            .from(organisation)
            .where(eq(organisation.authServiceId, id));
        return _organisation[0];
    }

    async create(input: NewOrganisation) {
        const _organisation = await this.db
            .insert(organisation)
            .values([input])
            .returning();
        return _organisation[0];
    }

    async update({id, input}: { id: string, input: Partial<Organisation> }) {
        const _organisation = await this.db
            .update(organisation)
            .set(input)
            .where(eq(organisation.id, id))
            .returning();
        return _organisation[0];
    }
}