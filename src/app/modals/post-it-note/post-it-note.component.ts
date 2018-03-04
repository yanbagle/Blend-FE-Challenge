import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Color} from '../../models/Color';
import {Note} from '../../models/Note';

@Component({
  selector: 'app-post-it-note',
  templateUrl: './post-it-note.component.html',
  styleUrls: ['./post-it-note.component.css']
})
export class PostItNoteComponent implements OnInit {

  // Post it note component that displays a user's note

  @Input() note: Note;

  @Output() deleteNoteEmitter: EventEmitter<any> = new EventEmitter();
  @Output() editNoteEmitter: EventEmitter<any> = new EventEmitter();

  public showDeleteConfirm = false;

  constructor() { }

  ngOnInit() {
  }

  public setColor () {
    return { 'background-color': this.note.color };
  }

  public showConfirmation () {
    this.showDeleteConfirm = true;
  }

  // emit note id back to notes-view comp to delete note
  public deleteNote(userSelect) {
    if (userSelect === 'delete') {
      this.deleteNoteEmitter.emit(this.note.id);
    } else {
      this.showDeleteConfirm = false;
    }
  }

  public goToEdit (noteId) {
    this.editNoteEmitter.emit(noteId);
  }

}
