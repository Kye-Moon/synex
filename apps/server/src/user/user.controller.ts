import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {UserService} from './user.service';
import {AuthGuard} from "../auth/auth.guard";
import Stripe from "stripe";
import Airtable from "airtable";

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService) {
    }

    @UseGuards(AuthGuard)
    @Get('initialised')
    async isUserInitialised() {
        try {
            return await this.userService.isUserInitialised();
        } catch (e) {
            console.error(e);
            throw new Error('Failed to determine if user is initialised');
        }
    }

    @UseGuards(AuthGuard)
    @Post('initialise')
    async initialiseUser() {
        try {
            return await this.userService.initialise();
        } catch (e) {
            console.error(e);
            throw new Error('Failed to initialise user');
        }
    }

    @UseGuards(AuthGuard)
    @Post('enquiry')
    async enquiry(
        @Body() body: { name: string, email: string, message: string, phone: string, product: string }
    ) {
        try {
            const Airtable = require('airtable');
            Airtable.configure({
                endpointUrl: 'https://api.airtable.com',
                apiKey: 'pativT0imer7c8dH6.d675ed311f0883e7663eab3e0882eb8789f3784512efc9282d1dcab6c361dd69'
            });
            const base = Airtable.base('appphwZiIVGIxeCFr');

            base('Enquiries').create([
                {
                    "fields": {
                        "Full Name": body.name,
                        "Email": body.email,
                        "Message": body.message ?? 'No message',
                        "Phone": body.phone ?? 'No phone',
                        "Date": new Date(),
                        "Product": body.product || 'Unknown'
                    }
                },
            ], function (err, records) {
                if (err) {
                    console.error(err);
                    return;
                }
                records.forEach(function (record) {
                    console.log(record.getId());
                });
            });

        } catch (e) {
            console.error(e);
            throw new Error('Failed to submit enquiry');
        }
    }
}
