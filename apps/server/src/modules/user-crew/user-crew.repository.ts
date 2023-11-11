import {Inject, Injectable} from "@nestjs/common";
import {ORM} from "../../drizzle/drizzle.module";
import {NodePgDatabase} from "drizzle-orm/node-postgres";
import * as schema from "../../drizzle/schema";
import {NewUserCrew, userCrew, UserCrew, UserCrewWithCrewMember} from "../../drizzle/schema";
import {eq} from "drizzle-orm";


@Injectable()
export class UserCrewRepository {
    constructor(@Inject(ORM) private db: NodePgDatabase<typeof schema>) {
    }

    async createUserCrew(input: NewUserCrew): Promise<UserCrew> {
        const _userCrew = await this.db.insert(userCrew).values([input]).returning();
        return _userCrew[0]
    }

    async findUserCrewByUserId(userId: string): Promise<UserCrewWithCrewMember[]> {
        return await this.db.query.userCrew.findMany({
            with: {
                crewMember: true,
            },
            where: eq(userCrew.userId, userId),
        });
    }

}
