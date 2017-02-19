import { Component } from '@angular/core';
import { User } from '../shared/models/user.model';
import { AuthService } from '../services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private user: any = {};

  constructor(private authService: AuthService) { }

  register() {
    this.authService.register(this.user.name, this.user.password, this.user.email).subscribe(res => console.log(res));
  }

}
