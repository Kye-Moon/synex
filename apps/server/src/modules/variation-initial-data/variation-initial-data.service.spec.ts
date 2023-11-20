import { Test, TestingModule } from '@nestjs/testing';
import { VariationInitialDataService } from './variation-initial-data.service';

describe('VariationInitialDataService', () => {
  let service: VariationInitialDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VariationInitialDataService],
    }).compile();

    service = module.get<VariationInitialDataService>(VariationInitialDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
