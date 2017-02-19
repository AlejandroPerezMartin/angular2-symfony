import { Inject, Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { User } from '../shared/models/user.model';
import { HttpClient } from './http-client';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

Injectable()
export class AuthService {

  public user: User;

  constructor(@Inject(Http) protected http: Http, @Inject(HttpClient) private rm: HttpClient) {}

  login(username: string, password: string) {

    let data = new URLSearchParams();
    data.append('username', username);
    data.append('password', password);
    data.append('grant_type', 'password');
    data.append('client_id', environment.CLIENT_ID);
    data.append('client_secret', environment.CLIENT_SECRET);

    return this.http.post(`${this.rm.apiUrl}/oauth/v2/token`, data, this.rm.options)
      .map(this.rm.extractData)
      .catch(this.rm.handleError);
  }

  register(user: User) {

    let body = {
      name: user.name,
      plainPassword: user.plainPassword,
      email: user.email
    };

    return this.http.post(`${this.rm.apiUrl}/api/register`, JSON.stringify(body), this.rm.options)
      .map(this.rm.extractData)
      .catch(this.rm.handleError);
  }

  logout() {
    localStorage.removeItem('token');
  }

}
