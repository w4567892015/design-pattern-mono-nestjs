import { IEvent } from '@nestjs/cqrs';

export class NoteCreatedEvent implements IEvent {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public readonly content: string
  ) {}
}
