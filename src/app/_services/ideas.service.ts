import { Inject, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { HttpClient } from './http-client';
import { AuthService} from './auth.service';
import { Idea } from '../shared/models/idea.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

Injectable();
export class IdeasService {

  public options;

  constructor(
    @Inject(Http) protected http: Http,
    @Inject(HttpClient) private rm: HttpClient,
    @Inject(AuthService) private authService: AuthService) {}

  getIdeas() {
    console.log(this.authService.token);
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + this.authService.token);

    this.options = new RequestOptions({ headers: headers, withCredentials: false });

    console.log(this.options);

    return this.http.get(`${this.rm.apiUrl}/api/ideas`, this.options)
      .map((response: Response) => {
        console.log(response);
        return response;
      })
      .catch(this.rm.handleError);
  }

}
