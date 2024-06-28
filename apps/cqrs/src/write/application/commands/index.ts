import { CreateNoteHandler } from './handler/create-note.handler';
import { ActivateNoteHandler } from './handler/activate-note.handler';
import { CreateNoteTagHandler } from './handler/create-note-tag.handler';

import { CreateNoteSaga } from './saga/create-note.saga';

export const CommandHandlers = [CreateNoteHandler, ActivateNoteHandler, CreateNoteTagHandler];

export const Sagas = [CreateNoteSaga];
