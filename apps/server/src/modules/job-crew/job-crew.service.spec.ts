import { Test, TestingModule } from '@nestjs/testing';
import { JobCrewService } from './job-crew.service';

describe('JobCrewService', () => {
  let service: JobCrewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobCrewService],
    }).compile();

    service = module.get<JobCrewService>(JobCrewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
