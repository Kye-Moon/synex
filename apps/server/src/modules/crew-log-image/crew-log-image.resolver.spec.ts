import { Test, TestingModule } from '@nestjs/testing';
import { CrewLogImageResolver } from './crew-log-image.resolver';
import { CrewLogImageService } from './crew-log-image.service';

describe('CrewLogImageResolver', () => {
  let resolver: CrewLogImageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrewLogImageResolver, CrewLogImageService],
    }).compile();

    resolver = module.get<CrewLogImageResolver>(CrewLogImageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
