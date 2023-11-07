import { Inject, Injectable } from '@nestjs/common';
import { ORM } from '../../drizzle/drizzle.module';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from '../../drizzle/schema';
import { CreateUserInput } from './dto/create-user.input';
import { user, User } from '../../drizzle/schema';
import { eq } from 'drizzle-orm';

@Injectable()
export class UserRepository {
  constructor(@Inject(ORM) private db: NodePgDatabase<typeof schema>) {}

  async createMany(createUserInput: CreateUserInput[]) {
    return this.db.insert(user).values(createUserInput).returning();
  }

  async createUser(createUserInput: CreateUserInput): Promise<User> {
    const _user = await this.db
      .insert(user)
      .values([createUserInput])
      .returning();
    return _user[0];
  }

  async findOneByPhone(phone: string): Promise<User> {
    const _user = await this.db
      .select()
      .from(user)
      .where(eq(user.phone, phone));
    return _user[0];
  }

  async findAll(): Promise<User[]> {
    return this.db.select().from(user);
  }
}
