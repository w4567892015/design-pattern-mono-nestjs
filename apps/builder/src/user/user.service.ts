import { Injectable } from '@nestjs/common';

import { IUser } from './dto'

import { UserBuilder } from './builder/user.builder';
import { CatBuilder } from './builder/cat.builder';

@Injectable()
export class UserService {
  constructor(
    private readonly userBuilder: UserBuilder,
    private readonly catBuilder: CatBuilder,
  ){}
  getInfo(): IUser {
    return {
      user: this.userBuilder.getUserInfo(),
      cat: this.catBuilder.getCatInfo()
    }
  }

  async setUser(input: IUser): Promise<IUser> {
    const { user, cat } = input;

    const oUser = await this.userBuilder
      .setEmail(user.email)
      .setName(user.name)
      .setAge(user.age)
      .build();

    const oCat = await this.catBuilder
      .setName(cat.name)
      .setAge(cat.age)
      .setBreed(cat.breed)
      .build();

    return {
      user: oUser,
      cat: oCat,
    }
  }
}
