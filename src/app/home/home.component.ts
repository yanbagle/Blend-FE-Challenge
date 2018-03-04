import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Home is the container/parent component which houses both the Add Note button and the post it notes view

  public showAddNote = false;

  constructor() { }

  ngOnInit() {
  }

  public showAddNoteModal() {
    this.showAddNote = true;
  }

  public handleUserAction (userAction) {
    // TODO: put these hardcoded actions into a constants file
    userAction === 'cancel' ? this.showAddNote = false : this.showAddNote = true;
  }

}
