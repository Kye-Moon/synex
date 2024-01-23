import { Test, TestingModule } from '@nestjs/testing';
import { JobScopeItemService } from './job-scope-item.service';

describe('JobScopeItemService', () => {
  let service: JobScopeItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobScopeItemService],
    }).compile();

    service = module.get<JobScopeItemService>(JobScopeItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
