
import { Injectable, Logger } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';

import { NoteCreatedEvent } from '../../events/impl/create-note.event';
import { ActivateNoteCommand } from '../impl/activate-note.command';
import { CreateNoteTagCommand } from '../impl/create-note-tag.command';

@Injectable()
export class CreateNoteSaga {
  logger = new Logger(this.constructor.name);
  @Saga()
  noteAutoCreated = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(NoteCreatedEvent),
      map((event) => {
        this.logger.log(`Inside ${this.constructor.name} Saga`);
        const commands: ICommand[] = [
          new ActivateNoteCommand(event.data.id),
          new CreateNoteTagCommand(event.data.id, event.data.tag)
        ];
        return commands;
      }),
      mergeMap(c => c),
    );
  };
}
