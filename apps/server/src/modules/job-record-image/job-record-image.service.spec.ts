import { Test, TestingModule } from '@nestjs/testing';
import { JobRecordImageService } from './job-record-image.service';

describe('VariationImageService', () => {
  let service: JobRecordImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobRecordImageService],
    }).compile();

    service = module.get<JobRecordImageService>(JobRecordImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
