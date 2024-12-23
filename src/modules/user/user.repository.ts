import { EntityRepository, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findAllUsers(): Promise<User[]> {
    return this.find();
  }
}
