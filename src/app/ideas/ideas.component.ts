import { Component, OnInit } from '@angular/core';

import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  doLogout() {
    this.authService.logout();
  }

}
