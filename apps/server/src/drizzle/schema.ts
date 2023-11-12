import {
  text,
  pgTable,
  varchar,
  timestamp,
  uuid,
  boolean,
  integer,
  decimal,
} from 'drizzle-orm/pg-core';
import {
  InferInsertModel,
  InferSelectModel,
  relations,
  sql,
} from 'drizzle-orm';

// ###################### USER ######################
// noinspection TypeScriptValidateTypes
export const user = pgTable('user', {
  id: uuid('id')
    .default(sql`gen_random_uuid ()`)
    .primaryKey(),
  name: text('full_name').notNull(),
  phone: varchar('phone', { length: 20 }).notNull(),
  password: varchar('password', { length: 100 }),
  email: varchar('email', { length: 100 }),
  isAdmin: boolean('is_admin').default(false),
  isCrewMember: boolean('is_crew_member').default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type User = InferSelectModel<typeof user>;
export type NewUser = InferInsertModel<typeof user>;

export const userRelations = relations(user, ({ many }) => ({
  crew: many(user),
}));

// ###################### USER TO CREW MEMBER TABLE ######################
export const userCrew = pgTable('user_crew', {
  id: uuid('id')
    .default(sql`gen_random_uuid ()`)
    .primaryKey(),
  userId: uuid('user_id')
    .references(() => user.id)
    .notNull(),
  crewMemberId: uuid('crew_member_id')
    .references(() => user.id)
    .notNull(),
});

export type UserCrew = InferSelectModel<typeof userCrew>;
export type NewUserCrew = InferInsertModel<typeof userCrew>;

export const userCrewRelations = relations(userCrew, ({ one }) => ({
  admin: one(user, {
    fields: [userCrew.userId],
    references: [user.id],
  }),
  crewMember: one(user, {
    fields: [userCrew.crewMemberId],
    references: [user.id],
  }),
}));

export type UserCrewWithCrewMember = UserCrew & {
  crewMember: User;
}

// ###################### JOB TABLE ######################
export const job = pgTable('job', {
  id: uuid('id')
    .default(sql`gen_random_uuid ()`)
    .primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  customerName: text('customer_name'),
  status: varchar('status', {
    enum: ['NOT_STARTED', 'IN_PROGRESS', 'FINISHED'],
  }),
  ownerId: uuid('owner_id')
    .references(() => user.id)
    .notNull(),
  dueDate: timestamp('due_date'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export type Job = InferSelectModel<typeof job>;
export type NewJob = InferInsertModel<typeof job>;
export type UpdateJob = Partial<NewJob>

export const jobRelations = relations(job, ({ one, many }) => ({
  owner: one(user, {
    fields: [job.ownerId],
    references: [user.id],
  }),
  // variations: many(variation),
  crew: many(user),
}));

// ###################### JOB CREW TABLE ######################

export const jobCrew = pgTable('job_crew', {
  id: uuid('id')
    .default(sql`gen_random_uuid ()`)
    .primaryKey(),
  jobId: uuid('job_id')
    .references(() => job.id)
    .notNull(),
  crewMemberId: uuid('crew_member_id')
    .references(() => user.id)
    .notNull(),
});

export type JobCrew = InferSelectModel<typeof jobCrew>;
export type NewJobCrew = InferInsertModel<typeof jobCrew>;

export const jobCrewRelations = relations(jobCrew, ({ one }) => ({
  job: one(job, {
    fields: [jobCrew.jobId],
    references: [job.id],
  }),
  crewMember: one(user, {
    fields: [jobCrew.crewMemberId],
    references: [user.id],
  }),
}));

// ###################### VARIATION TABLE ######################
export const variation = pgTable('variation', {
  id: uuid('id')
    .default(sql`gen_random_uuid ()`)
    .primaryKey(),
  jobId: uuid('job_id')
    .references(() => job.id)
    .notNull(),
  title: text('title').notNull(),
  description: text('description'),
  flag: varchar('flag', { enum: ['EARLY_WARNING', 'POTENTIAL', 'ACTIONED'] }),
  submittedBy: uuid('submitted_by')
    .references(() => user.id)
    .notNull(),
  estimatedCost: decimal('estimated_cost'),
  estimatedTime: decimal('estimated_time'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export type Variation = InferSelectModel<typeof variation>;
export type NewVariation = InferInsertModel<typeof variation>;

export const variationRelations = relations(variation, ({ one,many }) => ({
  job: one(job, {
    fields: [variation.jobId],
    references: [job.id],
  }),
  submittedBy: one(user, {
    fields: [variation.submittedBy],
    references: [user.id],
  }),
  resources: many(variationResource),
}));

// ###################### VARIATION RESOURCES TABLE ######################
export const variationResource = pgTable('variation_resource', {
  id: uuid('id')
    .default(sql`gen_random_uuid ()`)
    .primaryKey(),
  variationId: uuid('variation_id')
    .references(() => variation.id)
    .notNull(),
  type: varchar('type', { enum: ['LABOUR', 'MATERIAL', 'EQUIPMENT', 'OTHER'] }),
  description: text('description'),
  quantity: decimal('quantity'),
  unit: varchar('unit'),
  unitPrice: decimal('unit_price'),
  hours: decimal('hours'),
  rate: decimal('rate'),
  numPeople: integer('num_people'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export type VariationResource = InferSelectModel<typeof variationResource>;
export type NewVariationResource = InferInsertModel<typeof variationResource>;

// ###################### VARIATION IMAGE TABLE ######################
export const variationImage = pgTable('variation_image', {
  id: uuid('id')
    .default(sql`gen_random_uuid ()`)
    .primaryKey(),
  variationId: uuid('variation_id')
    .references(() => variation.id)
    .notNull(),
  url: text('url').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export type VariationImage = InferSelectModel<typeof variationImage>;
export type NewVariationImage = InferInsertModel<typeof variationImage>;

// ###################### NOTIFICATION TABLE ######################
export const notification = pgTable('notification', {
  id: uuid('id')
    .default(sql`gen_random_uuid ()`)
    .primaryKey(),
  jobId: uuid('job_id')
    .references(() => job.id)
    .notNull(),
  variationId: uuid('variation_id').references(() => variation.id),
  message: text('message').notNull(),
  isRead: boolean('is_read').default(false),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at')
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export type Notification = InferSelectModel<typeof notification>;
export type NewNotification = InferInsertModel<typeof notification>;

export const notificationRelations = relations(notification, ({ one }) => ({
  job: one(job, {
    fields: [notification.jobId],
    references: [job.id],
  }),
  variation: one(variation, {
    fields: [notification.variationId],
    references: [variation.id],
  }),
}));

// // ###################### ORGANISATION TABLE ######################
// export const organisation = pgTable('organisation', {
//   id: uuid('id')
//     .default(sql`gen_random_uuid ()`)
//     .primaryKey(),
//   name: text('name').notNull(),
//   createdAt: timestamp('created_at').defaultNow().notNull(),
//   updatedAt: timestamp('updated_at').defaultNow().notNull(),
// });

// ###################### USER TO ORG MEMBER TABLE ######################

// export const userOrganisation = pgTable('user_organisation', {
//   id: uuid('id')
//     .default(sql`gen_random_uuid ()`)
//     .primaryKey(),
//   userId: uuid('user_id')
//     .references(() => user.id)
//     .notNull(),
//   organisationId: uuid('organisation_id')
//     .references(() => organisation.id)
//     .notNull(),
//   isAdmin: boolean('is_admin').default(false),
//   isCrewMember: boolean('is_crew_member').default(false),
// });

// export const userOrganisationRelations = relations(
//   userOrganisation,
//   ({ one }) => ({
//     user: one(user, {
//       fields: [userOrganisation.userId],
//       references: [user.id],
//     }),
//     organisation: one(organisation, {
//       fields: [userOrganisation.organisationId],
//       references: [organisation.id],
//     }),
//   }),
// );
