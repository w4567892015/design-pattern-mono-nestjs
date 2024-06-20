import { User } from './user.dto';
import { Cat } from './cat.dto';

export * from './user.dto';
export * from './cat.dto';

export interface IUser {
  user: User;
  cat: Cat;
}
