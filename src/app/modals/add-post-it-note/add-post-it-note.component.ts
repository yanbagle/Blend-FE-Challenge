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
  public enableSubmit = false;
  public noteId; // if user is editing a note, this is the note id associated with it

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges (changes: SimpleChanges) {
    const note = changes['userSelectedNote'].currentValue;
    // if user selects to edit a note, we should have received their selected note
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
    this.enableSubmit = true;
  }

  public setSelectedColor (color) {
    this.selectedColor = color;
  }

  public cancel () {
    // TODO: standardize user actions object for emitting back to parent comps
    this.userAction.emit('cancel');
  }

  // emits back up to notes-view comp to add or edit the note
  public addNote () {
    const note = new Note(this.notesTitle, this.notes, this.selectedColor);
    this.userAction.emit({id: this.noteId, note: note});
  }

}
