import { Inject, Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';

import { HttpClient } from './http-client';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

Injectable();
export class AuthService {

  public token: string;

  constructor(@Inject(Http) protected http: Http, @Inject(HttpClient) private rm: HttpClient) {}

  login(username: string, password: string): Observable<boolean> {

    let data = new URLSearchParams();
    data.append('username', username);
    data.append('password', password);
    data.append('grant_type', 'password');
    data.append('client_id', environment.CLIENT_ID);
    data.append('client_secret', environment.CLIENT_SECRET);

    return this.http.post(`${this.rm.apiUrl}/oauth/v2/token`, data, this.rm.options)
      .map((response: Response) => {
        let token = response.json().access_token;

        if (token) {
          this.token = token;
          localStorage.setItem('token', token);
          return true;
        }
        return false;
      })
      .catch(this.rm.handleError);
  }

  isUserLogged() {
    return this.token || false;
  }

  register(name: string, password: string, email: string) {

    let data = new URLSearchParams();
    data.append('name', name);
    data.append('plainPassword', password);
    data.append('email', email);

    return this.http.post(`${this.rm.apiUrl}/api/register`, data, this.rm.options)
      .map(this.rm.extractData)
      .catch(this.rm.handleError);
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
  }

}
