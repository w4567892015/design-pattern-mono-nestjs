import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { NoteRepo } from '../../../../repository/note.repo';

import { NoteActivateEvent } from '../impl/activate-note.event';

@EventsHandler(NoteActivateEvent)
export class NoteActivateHandler implements IEventHandler<NoteActivateEvent> {
  constructor(
    private noteRepository: NoteRepo,
  ) {}
  handle(event: NoteActivateEvent) {
    this.noteRepository.activate(event.noteId);
  }
}
