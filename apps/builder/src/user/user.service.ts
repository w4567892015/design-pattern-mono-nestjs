import { Injectable } from '@nestjs/common';

import { CreateUserDto } from './dto/user.dto'

import { UserBuilder } from './builder/user.builder';

@Injectable()
export class UserService {
  constructor(
    private readonly userBuilder: UserBuilder,
  ){}
  setUser(input: CreateUserDto): CreateUserDto {
    const { email, name, age } = input;

    return this.userBuilder
      .setEmail(email)
      .setName(name)
      .setAge(age)
      .build();
  }
}
