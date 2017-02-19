import { Component } from '@angular/core';
import { Observer } from 'rxjs';

import { AuthService } from '../services';

import { User } from '../shared/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private user: any = {};

  constructor(private authService: AuthService) { }

  login() {
    this.authService.login(this.user.email, this.user.password)
      .subscribe(res => console.log(res));
  }

}
