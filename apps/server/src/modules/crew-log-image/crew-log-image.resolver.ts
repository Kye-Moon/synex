import { Resolver } from '@nestjs/graphql';
import { CrewLogImageService } from './crew-log-image.service';

@Resolver()
export class CrewLogImageResolver {
  constructor(private readonly crewLogImageService: CrewLogImageService) {}
}
