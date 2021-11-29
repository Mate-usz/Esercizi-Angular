import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser, Role, Gender } from '../../../../../1. Typescript esercizio 1/start';

@Component({
  selector: 'es5-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})

export class UserSingleComponent implements OnInit {
  @Input() user!: IUser;
  @Output() deleted = new EventEmitter<IUser>();

  constructor() { }

  ngOnInit(): void {
  }

  deleteUser() {
    this.deleted.emit(this.user);
  }
}
