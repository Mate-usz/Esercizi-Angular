import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IObj } from '../../../../../../1. Typescript esercizio 1/start';

@Component({
  selector: 'es7-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() user!: IObj;
  @Output() deleted = new EventEmitter<IObj>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteUser() {
    this.deleted.emit(this.user);
  }
}

