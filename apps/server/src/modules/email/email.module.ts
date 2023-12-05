import {Global, Module} from '@nestjs/common';
import {EmailService} from './email.service';
import {EmailResolver} from './email.resolver';
import {MailerModule} from "@nestjs-modules/mailer";
import {EjsAdapter} from "@nestjs-modules/mailer/dist/adapters/ejs.adapter";
import {join} from "path";
@Global()
@Module({
    providers: [EmailResolver, EmailService],
    imports: [
        MailerModule.forRoot({
            transport: {
                host: 'smtp.gmail.com',
                port: Number('587'),
                secure: false,
                auth: {
                    user: 'kyemoondevelopment@gmail.com',
                    pass: 'hrjs yumt gkmq npds',
                },
            },
            defaults: {
                from: 'kyemoondevelopment@gmail.com',
            },
            template: {
                dir: join(__dirname, '../../../mail/templates'),
                adapter: new EjsAdapter(),
                options: {
                    strict: true,
                },
            }
        })
    ],
    exports: [EmailService]
})
export class EmailModule {
}
