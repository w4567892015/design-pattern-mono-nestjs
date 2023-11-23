import { Injectable } from '@nestjs/common';

import { CreateUserDto } from '../dto/user.dto'


@Injectable()
export class UserBuilder {
  private user: CreateUserDto;

  constructor(){
    this.user = {
      name: '',
      email: ''
    }
  }

  setName(name: string): UserBuilder {
    this.user.name = name;
    return this;
  }

  setEmail(email: string): UserBuilder {
    this.user.email = email;
    return this;
  }

  setAge(age: number): UserBuilder {
    this.user.age = age;
    return this;
  }


  build(): CreateUserDto {
    return this.user;
  }
}
