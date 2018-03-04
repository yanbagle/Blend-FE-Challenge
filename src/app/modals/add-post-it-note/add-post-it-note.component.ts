import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Color} from '../../models/Color';
import {Note} from '../../models/Note';

@Component({
  selector: 'app-add-post-it-note',
  templateUrl: './add-post-it-note.component.html',
  styleUrls: ['./add-post-it-note.component.css']
})
export class AddPostItNoteComponent implements OnInit, OnChanges {

  @Output() userAction: EventEmitter<any> = new EventEmitter();
  @Input() userSelectedNote;
  public colors = Color;
  public notes;
  public notesTitle;
  public selectedColor = Color.RED;
  public editMode = false;
  public noteId; // if user is editing a note, this is the note id associated with it

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges (changes: SimpleChanges) {
    // if user selects to edit a note
    const note = changes['userSelectedNote'].currentValue;
    if (note) {
      this.notes = note.notes;
      this.notesTitle = note.title;
      this.selectedColor = note.color;
      this.editMode = true;
      this.noteId = note.id;
    }
  }

  public setColor () {
    return { 'background-color': this.selectedColor };
  }

  public notesOnChange () {

  }

  public setSelectedColor (color) {
    this.selectedColor = color;
  }

  public cancel () {
    this.userAction.emit('cancel');
  }

  // emits back up to notes-view comp to add or edit a note
  public addNote () {
    const note = new Note(this.notesTitle, this.notes, this.selectedColor);
    this.userAction.emit({id: this.noteId, note: note});
  }

}
