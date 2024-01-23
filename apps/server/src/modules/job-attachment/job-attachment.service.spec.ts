import { Test, TestingModule } from '@nestjs/testing';
import { JobAttachmentService } from './job-attachment.service';

describe('JobAttachmentService', () => {
  let service: JobAttachmentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobAttachmentService],
    }).compile();

    service = module.get<JobAttachmentService>(JobAttachmentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
