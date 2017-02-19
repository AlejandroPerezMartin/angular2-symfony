import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { AuthService } from '../services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  doLogin() {
    this.authService.login(this.user.email, this.user.password)
      .subscribe(res => console.log(res));
  }

}
