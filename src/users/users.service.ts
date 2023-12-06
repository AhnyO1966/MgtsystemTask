import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private readonly Users = [
        {
            userId: 3,
            username: 'Okorobia',
            password: 'Ahny1966',
        },

        {
            UserID: 4,
            username: 'Okorobia1',
            password: 'Ahny@1966',
        },

    ];
    password: string;
    find: UsersService | PromiseLike<UsersService>;
  userId: any;
  username: any;

    async findOne(_username: string): Promise<UsersService> {
        // return this.Users.find(user => user.username === username);
        return this.find;
      }
}
