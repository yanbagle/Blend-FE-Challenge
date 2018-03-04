import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css']
})
export class ConfirmDeleteComponent implements OnInit {

  @Output() userSelect: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  public cancel () {
    this.userSelect.emit('cancel');
  }

  public delete () {
    this.userSelect.emit('delete');
  }

}
