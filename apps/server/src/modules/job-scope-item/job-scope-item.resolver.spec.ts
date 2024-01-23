import { Test, TestingModule } from '@nestjs/testing';
import { JobScopeItemResolver } from './job-scope-item.resolver';
import { JobScopeItemService } from './job-scope-item.service';

describe('JobScopeItemResolver', () => {
  let resolver: JobScopeItemResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobScopeItemResolver, JobScopeItemService],
    }).compile();

    resolver = module.get<JobScopeItemResolver>(JobScopeItemResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
