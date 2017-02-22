import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private user: any = {};

  private sending: boolean = false;

  constructor(private authService: AuthService,  private router: Router) { }

  ngOnInit() {
    this.authService.isUserLogged()
      .then(() => this.router.navigate(['/ideas']) )
      .catch(() => console.log());
  }

  register() {
    this.sending = true;
    this.authService.register(this.user.name, this.user.password, this.user.email)
      .subscribe((res) => {
        this.router.navigate(['/login']);
      }, (err) => {
        this.sending = false;
      });
  }

}
