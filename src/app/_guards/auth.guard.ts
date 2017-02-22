import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild } from '@angular/router';

import { AuthService } from '../_services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService, private router: Router) { }

    canActivate() {
        return this.checkLogged();
    }

    canActivateChild() {
        return this.checkLogged();
    }

    private checkLogged() {
        return this.authService.isUserLogged()
        .then((res) => {
          return true;
        })
        .catch((err) => {
          this.router.navigate(['login']);
          return false;
        });
    }
}
