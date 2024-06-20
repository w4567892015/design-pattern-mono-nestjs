import { Body, Controller, Get, Post } from '@nestjs/common';

import { IUser } from './dto';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUserInfo(): Promise<IUser> {
    return this.userService.getInfo();
  }
  @Post()
  async setUserInfo(
    @Body() body: IUser
  ): Promise<IUser> {
    return this.userService.setUser(body);
  }
}
