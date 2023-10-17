import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      name: 'John Doe',
      username: 'admin',
      password: 'nen-huong-thom',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
