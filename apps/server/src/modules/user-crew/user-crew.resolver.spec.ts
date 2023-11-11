import { Test, TestingModule } from '@nestjs/testing';
import { UserCrewResolver } from './user-crew.resolver';
import { UserCrewService } from './user-crew.service';

describe('UserCrewResolver', () => {
  let resolver: UserCrewResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCrewResolver, UserCrewService],
    }).compile();

    resolver = module.get<UserCrewResolver>(UserCrewResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
