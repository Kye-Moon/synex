import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { Logger } from 'nestjs-pino';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cookieParser = require('cookie-parser');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Add Pino logger
  app.useLogger(app.get(Logger));

  // Add cookie parser
  app.use(cookieParser());

  await app.listen(4000);
}
bootstrap();
