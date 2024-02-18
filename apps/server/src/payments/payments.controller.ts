import {Body, Controller, Post, UseGuards} from '@nestjs/common';

import {PaymentsService} from './payments.service';
import Stripe from 'stripe';
import {AuthGuard} from "../auth/auth.guard"

@Controller('payments')
export class PaymentsController {
    constructor(
        private paymentsService: PaymentsService,
    ) {
    }

    @UseGuards(AuthGuard)
    @Post()
    async createSubscriptionSession(
        @Body() body: { priceId: string },
    ): Promise<Stripe.Response<Stripe.Checkout.Session> | undefined> {
        try {
            return await this.paymentsService.handleCreateSubscriptionSession(body.priceId);
        } catch (e) {
            console.error(e);
            throw new Error('Failed to create subscription session');
        }
    }

    @UseGuards(AuthGuard)
    @Post('portal-session')
    async createStripePortalSession(
        @Body() body: { productId: string },
    ) {
        try {
            return await this.paymentsService.createStripePortalSession();
        } catch (e) {
            console.error(e);
            throw new Error('Failed to create portal session');
        }
    }
}