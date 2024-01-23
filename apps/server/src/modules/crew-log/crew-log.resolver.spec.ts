import { Test, TestingModule } from '@nestjs/testing';
import { CrewLogResolver } from './crew-log.resolver';
import { CrewLogService } from './crew-log.service';

describe('CrewLogResolver', () => {
  let resolver: CrewLogResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrewLogResolver, CrewLogService],
    }).compile();

    resolver = module.get<CrewLogResolver>(CrewLogResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
