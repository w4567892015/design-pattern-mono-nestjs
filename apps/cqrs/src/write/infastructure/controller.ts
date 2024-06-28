import { Controller, Param, Post } from '@nestjs/common';

import { CommandBus } from '@nestjs/cqrs';

import { CreateNoteCommand } from '../application/commands/impl/create-note.command';
import { ActivateNoteCommand } from '../application/commands/impl/activate-note.command';

@Controller()
export class NoteWriteController {
  constructor(
    private readonly commandBus: CommandBus,
  ) {}

  @Post('/note')
  async setNote(): Promise<string> {
    return this.commandBus.execute(new CreateNoteCommand('test', 'test 123 !!', 'test'));
  }

  @Post('/note/:id')
  async setNoteActivateById(
    @Param('id') id: string,
  ): Promise<string> {
    return this.commandBus.execute(new ActivateNoteCommand(id));
  }
}
