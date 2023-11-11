import { Test, TestingModule } from '@nestjs/testing';
import { UserCrewService } from './user-crew.service';

describe('UserCrewService', () => {
  let service: UserCrewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCrewService],
    }).compile();

    service = module.get<UserCrewService>(UserCrewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
