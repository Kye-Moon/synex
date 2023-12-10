import { Test, TestingModule } from '@nestjs/testing';
import { VariationResourceService } from './variation-resource.service';

describe('VariationResourceService', () => {
  let service: VariationResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VariationResourceService],
    }).compile();

    service = module.get<VariationResourceService>(VariationResourceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
