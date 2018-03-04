import {Note} from './Note';

export class NoteContainer {

  public notes: {};
  private id = 0;

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

  public editNote (noteId: string, note: Note) {
    if (this.notes[noteId]) {
      note.id = noteId;
      this.notes[noteId] = note;
    }
  }

  public setId (note: Note) {
    note.id = this.id.toString();
    this.id++;
  }
}
