let data = []

export class NoteRepo {
  findAll() {
    return data;
  }

  findOne(id: string) {
    return data.find(note => note.id === id);
  }

  create(id: string, title: string, content: string) {
    const note = {
      id,
      title,
      content,
      status: 'inactive',
    }
    data.push(note);
    return note;
  }

  activate(id: string) {
    const note = data.find(note => note.id === id);
    if (note) {
      note.status = 'active';
    }
  }

  delete(id: string) {
    data = data.filter(note => note.id !== id);
  }
}
