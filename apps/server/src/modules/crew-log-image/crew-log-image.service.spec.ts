import { Test, TestingModule } from '@nestjs/testing';
import { CrewLogImageService } from './crew-log-image.service';

describe('CrewLogImageService', () => {
  let service: CrewLogImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrewLogImageService],
    }).compile();

    service = module.get<CrewLogImageService>(CrewLogImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
