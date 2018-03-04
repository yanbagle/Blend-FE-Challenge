import { Component, OnInit } from '@angular/core';
import {Color} from '../../models/Color';

@Component({
  selector: 'app-add-post-it-note',
  templateUrl: './add-post-it-note.component.html',
  styleUrls: ['./add-post-it-note.component.css']
})
export class AddPostItNoteComponent implements OnInit {

  public colors = Color;

  constructor() { }

  ngOnInit() {
  }

  public setColor () {
    return { 'background-color': 'green' };
  }

}
