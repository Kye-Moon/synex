import { Test, TestingModule } from '@nestjs/testing';
import { VariationInitialDataResolver } from './variation-initial-data.resolver';
import { VariationInitialDataService } from './variation-initial-data.service';

describe('VariationInitialDataResolver', () => {
  let resolver: VariationInitialDataResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VariationInitialDataResolver, VariationInitialDataService],
    }).compile();

    resolver = module.get<VariationInitialDataResolver>(VariationInitialDataResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
