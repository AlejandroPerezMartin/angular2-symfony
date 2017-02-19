import { Component } from '@angular/core';
import { AuthService } from '../_services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  private user: any = {};

  constructor(private authService: AuthService) { }

  register() {
    this.authService.register(this.user.name, this.user.password, this.user.email).subscribe(res => console.log(res));
  }

}
