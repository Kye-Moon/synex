import { Test, TestingModule } from '@nestjs/testing';
import { JobAttachmentResolver } from './job-attachment.resolver';
import { JobAttachmentService } from './job-attachment.service';

describe('JobAttachmentResolver', () => {
  let resolver: JobAttachmentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobAttachmentResolver, JobAttachmentService],
    }).compile();

    resolver = module.get<JobAttachmentResolver>(JobAttachmentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
