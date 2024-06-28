import { CreateNoteHandler } from './handler/create-note.handler';
import { ActivateNoteHandler } from './handler/activate-note.handler';

import { CreateUserSaga } from './saga/create-note.saga';

export const CommandHandlers = [CreateNoteHandler, ActivateNoteHandler];

export const Sagas = [CreateUserSaga];
