import { Component, OnInit } from '@angular/core';

import { AuthService } from '../_services';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user: any = {};

  private error: string;
  private loading: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.isUserLogged()) {
      this.router.navigate(['/ideas']);
    }
  }

  login() {
    this.loading = true;
    this.authService.login(this.user.email, this.user.password)
      .subscribe(res => {
        if (res) {
          this.router.navigate(['ideas']);
        } else {
          this.loading = false;
        }
      }, err => {
        this.error = err.error_description;
        this.loading = false;
      });
  }

}
