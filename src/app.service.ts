import { Injectable } from '@nestjs/common';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class AppService {

  constructor(private readonly userRep: UserRepository) {}

  getHello(): string {
    return 'Hello World!';
  }

  async createUser(location:string, name: string) {
    return await this.userRep.createUser(location, name);
  }

  async getAllUsers(location:string) {
    return await this.userRep.getUsers(location);
  }
}
