
import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { NoteCreatedEvent } from '../../events/impl/create-note.event';
import { ActivateNoteCommand } from '../impl/activate-note.command';

@Injectable()
export class CreateUserSaga {
  @Saga()
  accountCreated = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(NoteCreatedEvent),
      map((event) => new ActivateNoteCommand(event.noteId)),
    );
  };
}
