import {Injectable} from '@nestjs/common';

import {MailerService} from '@nestjs-modules/mailer';
interface Email {
    to: string;
    data: any;
}

@Injectable()
export class EmailService {

    constructor(private readonly mailerService: MailerService) {
    }

    async welcomeEmail() {

        const subject = `Welcome to Company: Kevin`;

        await this.mailerService.sendMail({
            to: 'kyemoon1@gmail.com',
            subject,
            template: './welcome',
            context: {
                name: "KEvin",
                confirmation_url: 'http://localhost:3000',
            },
        });
    }
}

