import { Injectable } from '@nestjs/common';
import { AccountState } from '../interfaces/state.interface';

import { AccountStateService } from '../../account.service';

@Injectable()
export class LockedState implements AccountState {
  constructor(
    private readonly accountStateService: AccountStateService
  ){}

  handleInactive(): void {
    throw new Error('Method not implemented.');
  }
  handleActive(): void {
    this.accountStateService.setState(this.accountStateService.activeState);
  }
  handleLocked(): void {
    console.log('Account is already Locked');
  }
  handleSuspended(): void {
    throw new Error('Method not implemented.');
  }
  handleDeleted(): void {
    this.accountStateService.setState(this.accountStateService.deletedState);
  }
}
