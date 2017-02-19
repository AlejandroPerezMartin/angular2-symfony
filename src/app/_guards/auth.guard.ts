import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private router: Router) { }

    canActivate() {
        return this.checkLogged();
    }

    canActivateChild() {
        return this.checkLogged();
    }

    private checkLogged(): boolean {
        if (localStorage.getItem('token')) {
          return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
