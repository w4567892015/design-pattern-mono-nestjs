import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { NoteRepo } from '../../../../repository/note.repo';

import { NoteCreatedTagEvent } from '../impl/create-note-tag.event';

@EventsHandler(NoteCreatedTagEvent)
export class NoteCreateTagHandler implements IEventHandler<NoteCreatedTagEvent> {
  constructor(
    private noteRepository: NoteRepo,
  ) {}
  handle(event: NoteCreatedTagEvent) {
    this.noteRepository.setTag(event.id, event.tag);
  }
}
