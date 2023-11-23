import { Injectable } from '@nestjs/common';

import { AccountState } from './state/interfaces/state.interface';

import {
  InactiveState,
  ActiveState,
  LockedState,
  SuspendedState,
  DeletedState,
} from './state/action';

@Injectable()
export class AccountStateService {
  public inactiveState: InactiveState = new InactiveState(this);
  public activeState: ActiveState = new ActiveState(this);
  public lockedState: LockedState = new LockedState(this);
  public suspendedState: SuspendedState = new SuspendedState(this);
  public deletedState: DeletedState = new DeletedState(this);

  private state: AccountState;

  constructor() {
    this.state = this.inactiveState;
  }

  setState(state: AccountState): void {
    console.log(`Changing state from ${this.state.constructor.name} to ${state.constructor.name}`);
    this.state = state;
  }

  active(): void {
    this.state.handleActive();
  }

  locked(): void {
    this.state.handleLocked();
  }

  suspended(): void {
    this.state.handleSuspended();
  }

  delete(): void {
    this.state.handleDeleted();
  }
}
