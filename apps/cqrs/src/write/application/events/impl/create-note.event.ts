import { IEvent } from '@nestjs/cqrs';

export class NoteCreatedEvent implements IEvent {
  constructor(
    public readonly data,
  ) {}
}
