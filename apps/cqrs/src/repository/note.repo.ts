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
      tags: [],
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

  setTag(id: string, tag: string) {
    const note = data.find(note => note.id === id);
    if (note) {
      note.tags.push(tag);
    }
  }

  delete(id: string) {
    data = data.filter(note => note.id !== id);
  }
}
