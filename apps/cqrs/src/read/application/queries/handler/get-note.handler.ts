import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { NoteRepo } from '../../../../repository/note.repo';

import { GetNoteQuery } from '../impl/get-note.query';

@QueryHandler(GetNoteQuery)
export class GetNoteHandler implements IQueryHandler<GetNoteQuery> {
  constructor(
    private noteRepository: NoteRepo
  ){}

  execute(query: GetNoteQuery): any {
    if (query.id) {
      return this.noteRepository.findOne(query.id);
    }
    return this.noteRepository.findAll();
  }
}
