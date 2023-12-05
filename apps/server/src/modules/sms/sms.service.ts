import { Injectable } from '@nestjs/common';
import {TwilioService} from "nestjs-twilio";

@Injectable()
export class SmsService {
    public constructor(private readonly twilioService: TwilioService) {}

    async SendInviteSMS({phoneNumber, tempPassword,email, inviterOrgName,inviterName}:{phoneNumber: string, tempPassword: string, email: string, inviterName: string, inviterOrgName: string}) {
        return this.twilioService.client.messages.create({
            body: `${inviterName} from ${inviterOrgName} has invited you to join the Varifyy app. Your temporary password is ${tempPassword}. Please login to the app and change your password. Your email is ${email}`,
            from: "+19044743692",
            to: phoneNumber,
        });
    }
}
