import { Test, TestingModule } from '@nestjs/testing';
import { JobRecordService } from './job-record.service';

describe('VariationService', () => {
  let service: JobRecordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobRecordService],
    }).compile();

    service = module.get<JobRecordService>(JobRecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
