import { Test, TestingModule } from '@nestjs/testing';
import { VariationResourceResolver } from './variation-resource.resolver';
import { VariationResourceService } from './variation-resource.service';

describe('VariationResourceResolver', () => {
  let resolver: VariationResourceResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VariationResourceResolver, VariationResourceService],
    }).compile();

    resolver = module.get<VariationResourceResolver>(VariationResourceResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
