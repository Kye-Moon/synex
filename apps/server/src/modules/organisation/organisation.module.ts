import { Module } from '@nestjs/common';
import { OrganisationService } from './organisation.service';
import { OrganisationResolver } from './organisation.resolver';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [OrganisationResolver, OrganisationService],
  imports: [
    ConfigModule.forRoot({
      cache: true,
    }),
  ],
})
export class OrganisationModule {}
