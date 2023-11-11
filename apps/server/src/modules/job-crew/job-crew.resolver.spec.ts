import { Test, TestingModule } from '@nestjs/testing';
import { JobCrewResolver } from './job-crew.resolver';
import { JobCrewService } from './job-crew.service';

describe('JobCrewResolver', () => {
  let resolver: JobCrewResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobCrewResolver, JobCrewService],
    }).compile();

    resolver = module.get<JobCrewResolver>(JobCrewResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
