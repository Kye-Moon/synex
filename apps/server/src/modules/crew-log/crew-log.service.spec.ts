import { Test, TestingModule } from '@nestjs/testing';
import { CrewLogService } from './crew-log.service';

describe('CrewLogService', () => {
  let service: CrewLogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrewLogService],
    }).compile();

    service = module.get<CrewLogService>(CrewLogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
