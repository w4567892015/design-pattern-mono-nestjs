export interface AccountState {
  handleInactive(): void;
  handleActive(): void;
  handleLocked(): void;
  handleSuspended(): void;
  handleDeleted(): void;
}
