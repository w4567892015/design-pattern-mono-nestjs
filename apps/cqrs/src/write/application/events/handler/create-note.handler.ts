import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { NoteRepo } from '../../../../repository/note.repo';

import { NoteCreatedEvent } from '../impl/create-note.event';

@EventsHandler(NoteCreatedEvent)
export class NoteCreateHandler implements IEventHandler<NoteCreatedEvent> {
  constructor(
    private noteRepository: NoteRepo,
  ) {}
  handle(event: NoteCreatedEvent) {
    this.noteRepository.create(event.id, event.title, event.content);
  }
}
