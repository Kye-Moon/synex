import { Test, TestingModule } from '@nestjs/testing';
import { JobRecordResolver } from './job-record.resolver';
import { JobRecordService } from './job-record.service';

describe('VariationResolver', () => {
  let resolver: JobRecordResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobRecordResolver, JobRecordService],
    }).compile();

    resolver = module.get<JobRecordResolver>(JobRecordResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
