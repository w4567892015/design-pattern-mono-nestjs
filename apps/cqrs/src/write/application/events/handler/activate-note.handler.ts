import { Logger } from '@nestjs/common';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

import { NoteRepo } from '../../../../repository/note.repo';

import { NoteActivateEvent } from '../impl/activate-note.event';

@EventsHandler(NoteActivateEvent)
export class NoteActivateHandler implements IEventHandler<NoteActivateEvent> {
  private logger: Logger = new Logger(NoteActivateHandler.name);

  constructor(
    private noteRepository: NoteRepo,
  ) {}
  handle(event: NoteActivateEvent) {
    this.logger.log(`Run ${event.constructor.name}`);
    this.noteRepository.activate(event.noteId);
  }
}
