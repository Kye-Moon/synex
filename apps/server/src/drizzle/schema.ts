import {
    text,
    pgTable,
    varchar,
    timestamp,
    uuid,
    boolean,
    integer,
    decimal, numeric,
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
    phone: varchar('phone', {length: 20}),
    password: varchar('password', {length: 100}),
    email: varchar('email', {length: 100}).unique(),
    organisationId: uuid('organisation_id').notNull(),
    role: varchar('role', {enum: ['OWNER', 'ADMIN', 'SUPERVISOR', 'CREW_MEMBER']}),
    status: varchar('status', {enum: ['ACTIVE', 'INVITED', "DEACTIVATED"]}).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type User = InferSelectModel<typeof user>;
export type NewUser = InferInsertModel<typeof user>;

export const userRelations = relations(user, ({one, many}) => ({
    organisation: one(organisation, {
        fields: [user.organisationId],
        references: [organisation.id],
    }),
}));

// ###################### ORGANISATION TABLE ######################
export const organisation = pgTable('organisation', {
    id: uuid('id')
        .default(sql`gen_random_uuid ()`)
        .primaryKey(),
    name: text('name').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type Organisation = InferSelectModel<typeof organisation>;
export type NewOrganisation = InferInsertModel<typeof organisation>;

const organisationRelations = relations(organisation, ({one, many}) => ({
    users: many(user),
}));


// ###################### JOB TABLE ######################
export const job = pgTable('job', {
    id: uuid('id')
        .default(sql`gen_random_uuid ()`)
        .primaryKey(),
    title: text('title').notNull(),
    description: text('description'),
    customerName: text('customer_name'),
    status: varchar('status', {
        enum: ['NOT_STARTED', 'IN_PROGRESS', 'FINISHED', "ARCHIVED"],
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

export const jobRelations = relations(job, ({one, many}) => ({
    owner: one(user, {
        fields: [job.ownerId],
        references: [user.id],
    }),
    variations: many(variation),
    crew: many(user)
}));

// ###################### JOB CREW TABLE ######################

export const jobCrew = pgTable('job_crew', {
    id: uuid('id')
        .default(sql`gen_random_uuid ()`)
        .primaryKey(),
    jobId: uuid('job_id')
        .references(() => job.id, {onDelete: 'cascade'})
        .notNull(),
    crewMemberId: uuid('crew_member_id')
        .references(() => user.id)
        .notNull(),
});

export type JobCrew = InferSelectModel<typeof jobCrew>;
export type NewJobCrew = InferInsertModel<typeof jobCrew>;

export const jobCrewRelations = relations(jobCrew, ({one}) => ({
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
    flag: varchar('flag', {enum: ['EARLY_WARNING', 'POTENTIAL', 'ACTIONED']}),
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
export type UpdateVariation = Partial<NewVariation>

export const variationRelations = relations(variation, ({one, many}) => ({
    job: one(job, {
        fields: [variation.jobId],
        references: [job.id],
    }),
    submittedBy: one(user, {
        fields: [variation.submittedBy],
        references: [user.id],
    }),
    resources: many(variationResource),
    images: many(variationImage),
    initialData: one(variationInitialData),
}));

// ###################### VARIATION RESOURCES TABLE ######################
export const variationResource = pgTable('variation_resource', {
    id: uuid('id')
        .default(sql`gen_random_uuid ()`)
        .primaryKey(),
    variationId: uuid('variation_id')
        .references(() => variation.id, {onDelete: 'cascade'})
        .notNull(),
    type: varchar('type', {enum: ['LABOUR', 'MATERIAL', 'EQUIPMENT', 'OTHER']}),
    description: text('description'),
    quantity: numeric('quantity'),
    unit: varchar('unit'),
    unitPrice: numeric('unit_price'),
    hours: numeric('hours'),
    rate: numeric('rate'),
    numPeople: numeric('num_people'),
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
        .references(() => variation.id, {onDelete: 'cascade'})
        .notNull(),
    url: text('url').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
});

export type VariationImage = InferSelectModel<typeof variationImage>;
export type NewVariationImage = InferInsertModel<typeof variationImage>;

export const variationInitialData = pgTable('variation_initial_data', {
    id: uuid('id')
        .default(sql`gen_random_uuid
            ()`)
        .primaryKey(),
    variationId: uuid('variation_id')
        .references(() => variation.id, {onDelete: 'cascade'})
        .notNull(),
    hours: numeric('time'),
    numPeople: numeric('num_people'),
    who: text('who'),
    materials: text('materials'),
    equipment: text('equipment'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at')
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),
});

export type VariationInitialData = InferSelectModel<typeof variationInitialData>;
export type NewVariationInitialData = InferInsertModel<typeof variationInitialData>;
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

export const notificationRelations = relations(notification, ({one}) => ({
    job: one(job, {
        fields: [notification.jobId],
        references: [job.id],
    }),
    variation: one(variation, {
        fields: [notification.variationId],
        references: [variation.id],
    }),
}));


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
