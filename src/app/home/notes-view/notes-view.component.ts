import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {NoteContainer} from '../../models/NoteContainer';
import {Note} from '../../models/Note';
import {Color} from '../../models/Color';

@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.css']
})
export class NotesViewComponent implements OnInit, OnChanges {

  // Notes View component displays all of the user's created Post it notes so far

  public container: NoteContainer;
  public userSelectedNote: Note;
  @Input() showAddNote: boolean;
  @Output() userAction: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.container = new NoteContainer();
    this.container.addNote(new Note('Sample Note', 'Click the Add Note button to add more notes!', Color.RED));
  }

  ngOnChanges () {}

  public deleteNote (noteId) {
    this.container.deleteNote(noteId);
  }

  // ev is an object containing id and note properties
  public addNote (ev) {
    // TODO: put these hardcoded actions into a constants file
    if (ev !== 'cancel') {
      // check to see if note already exists in the container
      if (this.container.notes[ev.id]) {
        // edits a note
        this.container.editNote(ev.id, ev.note);
      } else {
        // add note to the container
        this.container.addNote(ev.note);
      }
    }
    this.userSelectedNote = null;
    this.showAddNote = false;
    this.userAction.emit('cancel');
  }

  public editNote (noteId) {
    // grab the note that the user selected from container
    this.userSelectedNote = this.container.notes[noteId];
    // opens up add note modal
    this.showAddNote = true;
    this.userAction.emit('showAddNote');
  }

}
