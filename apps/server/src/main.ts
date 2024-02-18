import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {Logger} from 'nestjs-pino';
import {ConfigService} from "@nestjs/config";
import {NestExpressApplication} from "@nestjs/platform-express";

const cookieParser = require('cookie-parser');

async function bootstrap() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {rawBody: true});
    app.enableCors({
        origin:
            ['http://localhost:5173', 'http://localhost:3000', 'https://stage-synex-home-webui.onrender.com', 'https://synex.one'],
        credentials: true,
    })

    const configService = app.get(ConfigService);


    // Add Pino logger
    app.useLogger(app.get(Logger));

    // Add cookie parser
    app.use(cookieParser());

    await app.listen(configService.get('GLOBAL.PORT'));
}

bootstrap();
