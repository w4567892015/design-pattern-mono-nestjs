import { Injectable } from '@nestjs/common';

import { Cat } from '../dto';

@Injectable()
export class CatBuilder {
  private cat: Cat;

  constructor() {
    this.cat = {
      name: '',
      age: 0,
      breed: '',
    };
  }

  getCatInfo(): Cat {
    return this.cat;
  }

  setName(name: string): CatBuilder {
    this.cat.name = name;
    return this;
  }

  setAge(age: number): CatBuilder {
    this.cat.age = age;
    return this;
  }

  setBreed(breed: string): CatBuilder {
    this.cat.breed = breed;
    return this;
  }

  async build(): Promise<Cat> {
    return this.cat;
  }
}
