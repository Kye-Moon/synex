import {pgTable, text, timestamp, uuid, varchar,} from 'drizzle-orm/pg-core';
import {InferInsertModel, InferSelectModel, relations, sql,} from 'drizzle-orm';

// ###################### USER ######################
export const user = pgTable('user', {
    id: uuid('id')
        .default(sql`gen_random_uuid
        ()`)
        .primaryKey(),
    authServiceId: text('auth_service_id').notNull(),
    firstName: text('first_name'),
    lastName: text('last_name'),
    phone: varchar('phone', {length: 20}),
    email: varchar('email', {length: 100}).unique(),
    organisationId: uuid('organisation_id'),
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


// ###################### ORGANISATION ######################
export const organisation = pgTable('organisation', {
    id: uuid('id')
        .default(sql`gen_random_uuid
        ()`)
        .primaryKey(),
    authServiceId: text('auth_service_id').notNull(),
    customerId: text('customer_id'),
    name: text('name').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type Organisation = InferSelectModel<typeof organisation>;
export type NewOrganisation = InferInsertModel<typeof organisation>;

const organisationRelations = relations(organisation, ({one, many}) => ({
    users: many(user),
}));

export const subscription = pgTable('subscription', {
    id: uuid('id')
        .default(sql`gen_random_uuid
        ()`)
        .primaryKey(),
    externalId: text('external_id').notNull(),
    organisationId: uuid('organisation_id'),
    externalProductId: text('external_product_id'),
    externalPriceId: text('external_price_id'),
    status: varchar('status', {length: 20}).notNull(),
    nextPaymentDate: timestamp('next_payment_date'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

export type Subscription = InferSelectModel<typeof subscription>;
export type NewSubscription = InferInsertModel<typeof subscription>;

const subscriptionRelations = relations(subscription, ({one, many}) => ({
    organisation: one(organisation, {
        fields: [subscription.organisationId],
        references: [organisation.id],
    }),
}));

