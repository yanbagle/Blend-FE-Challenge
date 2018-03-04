import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Color} from '../../models/Color';
import {Note} from '../../models/Note';

@Component({
  selector: 'app-post-it-note',
  templateUrl: './post-it-note.component.html',
  styleUrls: ['./post-it-note.component.css']
})
export class PostItNoteComponent implements OnInit {

  @Input() note: Note;

  @Output() deleteNoteEmitter: EventEmitter<any> = new EventEmitter();

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

  public deleteNote(userSelect) {
    if (userSelect === 'delete') {
      this.deleteNoteEmitter.emit(this.note.id);
    } else {
      this.showDeleteConfirm = false;
    }
  }

}
