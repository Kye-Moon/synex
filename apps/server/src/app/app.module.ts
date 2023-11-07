import { Module } from '@nestjs/common';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { YogaDriver, YogaDriverConfig } from '@graphql-yoga/nestjs';
import { AuthModule } from '../modules/auth/auth.module';
import { LoggerModule } from 'nestjs-pino';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from '../modules/user/user.module';
import { DrizzleModule } from '../drizzle/drizzle.module';
import { JobModule } from '../modules/job/job.module';
import { RequestModule } from '../modules/request/request.module';

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp: {
        enabled: false,
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
          },
        },
      },
    }),
    GraphQLModule.forRoot<YogaDriverConfig>({
      driver: YogaDriver,
      autoSchemaFile: 'schema.graphql',
    }),
    AuthModule,
    UserModule,
    JobModule,
    DrizzleModule,
    RequestModule,
  ],
  controllers: [AppResolver],
  providers: [AppService],
})
export class AppModule {}
