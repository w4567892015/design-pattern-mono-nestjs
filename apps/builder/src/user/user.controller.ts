import { Body, Controller, Post } from '@nestjs/common';

import { CreateUserDto } from './dto/user.dto';

import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  getHello(
    @Body() body: CreateUserDto
  ): CreateUserDto {
    return this.userService.setUser(body);
  }
}
