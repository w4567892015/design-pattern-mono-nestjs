import { IEvent } from '@nestjs/cqrs';

export class NoteCreatedTagEvent implements IEvent {
  constructor(
    public readonly id: string,
    public readonly tag: string,
  ) {}
}
