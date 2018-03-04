import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Color} from '../../models/Color';
import {Note} from '../../models/Note';

@Component({
  selector: 'app-add-post-it-note',
  templateUrl: './add-post-it-note.component.html',
  styleUrls: ['./add-post-it-note.component.css']
})
export class AddPostItNoteComponent implements OnInit {

  @Output() userAction: EventEmitter<any> = new EventEmitter();
  public colors = Color;
  public notes = '';
  public notesTitle = '';
  public selectedColor = Color.RED;

  constructor() { }

  ngOnInit() {
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

  public addNote () {
    const note = new Note(this.notesTitle, this.notes, this.selectedColor);
    this.userAction.emit(note);
  }

}
