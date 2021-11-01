import { Component, OnInit, Input } from '@angular/core';

import { IObj, Role, Gender } from '../../../../../1. Typescript esercizio 1/start';

@Component({
  selector: 'es2-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() user!: IObj;

  constructor() { }

  ngOnInit(): void {
  }

}
