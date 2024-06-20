import { Injectable } from '@nestjs/common';

import { User } from '../dto'

@Injectable()
export class UserBuilder {
  private user: User;

  constructor(){
    this.user = {
      name: '',
      email: ''
    }
  }

  getUserInfo(): User {
    return this.user;
  }

  setEmail(email: string): UserBuilder {
    this.user.email = email;
    return this;
  }

  setName(name: string): UserBuilder {
    this.user.name = name;
    return this;
  }

  setAge(age: number): UserBuilder {
    this.user.age = age;
    return this;
  }

  async build(): Promise<User> {
    return this.user;
  }
}
