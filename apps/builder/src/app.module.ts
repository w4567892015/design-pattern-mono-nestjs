import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';

import { UserBuilder, CatBuilder } from './user/builder';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, UserBuilder,CatBuilder],
})
export class AppModule {}
