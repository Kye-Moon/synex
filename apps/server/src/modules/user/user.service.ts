import { Inject, Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { RequestService } from '../request/request.service';

@Injectable()
export class UserService {
  constructor(
    private readonly request: RequestService,
    private readonly userRepository: UserRepository,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    return await this.userRepository.createUser(createUserInput);
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async update(id: string, updateUserInput: UpdateUserInput) {
    // const user = await this.userRepository.find({ id: id });
    // const res = await this.userRepository.find(
    //   updateUserInput.crewId as any,
    //   {},
    // );
    // console.log(res);
    // res.map((user) => {
    //   user.crew.add(user);
    // });
    // await this.em.flush();
    // const userCrew = await this.userRepository.findOneOrFail(
    //   { id: id },
    //   { populate: true },
    // );
    // console.log(userCrew.crew);
    // return user;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  // currentUserID() {
  //   return this.request.req.user.userId;
  // }
}
