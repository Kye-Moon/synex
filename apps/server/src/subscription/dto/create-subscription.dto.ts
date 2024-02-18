export class CreateSubscriptionDto {
    externalId: string;
    organisationId: string;
    externalProductId: string;
    externalPriceId: string;
    status: string;
    nextPaymentDate: Date;
}
