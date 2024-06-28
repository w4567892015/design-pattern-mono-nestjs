
import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { NoteCreatedEvent } from '../../events/impl/create-note.event';
import { ActivateNoteCommand } from '../impl/activate-note.command';
import { CreateNoteTagCommand } from '../impl/create-note-tag.command';

@Injectable()
export class CreateNoteSaga {
  @Saga()
  noteAutoCreated = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(NoteCreatedEvent),
      mergeMap((event) => of(
        new ActivateNoteCommand(event.id),
        new CreateNoteTagCommand(event.id, 'test')
      )),
    );
  };
}
