import { Controller, Get, Post } from '@nestjs/common';

import { RootService } from './root.service';

@Controller()
export class RootController {
  constructor(
    private readonly rootService: RootService,
  ) {}

  @Get()
  async getHello(): Promise<string> {
    return this.rootService.getHello();
  }
}
