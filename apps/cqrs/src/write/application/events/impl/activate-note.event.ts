import { IEvent } from '@nestjs/cqrs';

export class NoteActivateEvent implements IEvent {
  constructor(
    public readonly noteId: string,
  ) {}
}
