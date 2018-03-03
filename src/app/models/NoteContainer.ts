class NoteContainer {

  notes: {};

  constructor () {
    this.notes = {};
  }

  public addNote (note: Note) {
    this.setId(note);
    this.notes[note.id] = note;
  }

  public deleteNote (noteId: string) {
    if (this.notes[noteId]) {
      delete this.notes[noteId];
    }
  }

  public editNote (noteId: string, title, notes, color) {
    if (this.notes[noteId]) {
      this.notes[noteId].title = title;
      this.notes[noteId].notes = notes;
      this.notes[noteId].color = color;
    }
  }

  public setId (note: Note) {
    let rand = Math.floor(Math.random() * Math.floor(1000)).toString();
    while (this.notes[rand]) {
      rand = Math.floor(Math.random() * Math.floor(1000)).toString();
    }
    note.id = rand;
  }
}
