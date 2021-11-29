import { Component, Input, OnInit } from '@angular/core';
import { IUser } from '../models/User';

@Component({
  selector: 'es3-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {

  @Input() user!: IUser;

  constructor() { }

  ngOnInit(): void {
  }

}
