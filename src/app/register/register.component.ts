import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private user: User;

  constructor() { }

  ngOnInit() {
  }

}
