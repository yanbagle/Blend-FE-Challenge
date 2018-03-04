import { Component, OnInit } from '@angular/core';
import {NoteContainer} from '../../models/NoteContainer';
import {Note} from '../../models/Note';
import {Color} from '../../models/Color';

@Component({
  selector: 'app-notes-view',
  templateUrl: './notes-view.component.html',
  styleUrls: ['./notes-view.component.css']
})
export class NotesViewComponent implements OnInit {

  public container: NoteContainer;

  constructor() { }

  ngOnInit() {
    this.container = new NoteContainer();
    this.container.addNote(new Note('Sample Note', 'Click on Add Note button to add more notes!', Color.RED));
    this.container.addNote(new Note('Sample Note', 'Click on Add Note button to add more notes!', Color.RED));
    this.container.addNote(new Note('Sample Note', 'Click on Add Note button to add more notes!', Color.RED));
  }

}
