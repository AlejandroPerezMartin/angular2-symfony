import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../_services';
import { Router } from '@angular/router';

import { MdlSnackbarService } from 'angular2-mdl';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') loginForm: NgForm;

  private user: any = {};
  private loading: boolean = false;

  constructor(private authService: AuthService, private router: Router, private mdlSnackbarService: MdlSnackbarService) { }

  ngOnInit() {
    this.authService.isUserLogged()
      .then(() => this.router.navigate(['/ideas']))
      .catch(() => console.log());
  }

  login() {
    this.loading = true;
    this.authService.login(this.user.email, this.user.password)
      .subscribe(res => {
        if (res) {
          this.router.navigate(['/ideas']);
        } else {
          this.loading = false;
        }
      }, err => {
        this.mdlSnackbarService.showSnackbar({
          message: err.error_description
        });
        this.user.password = '';
        this.loading = false;
      });
  }

}
