import { Inject, Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { HttpClient } from './http-client';
import { AuthService} from './auth.service';
import { Idea } from '../_models/idea.model';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';

Injectable();
export class IdeasService {

  private options;

  private headers: Headers = new Headers();

  constructor(
    @Inject(Http) protected http: Http,
    @Inject(HttpClient) private rm: HttpClient,
    @Inject(AuthService) private authService: AuthService) {
      this.headers.append('Authorization', 'Bearer ' + this.authService.getToken());
      this.options = new RequestOptions({ headers: this.headers, withCredentials: false });
    }

  getIdeas() {
    return this.http.get(`${this.rm.apiUrl}/api/ideas`, this.options)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.rm.handleError);
  }

  addIdea(idea: Idea) {
    return this.http.post(`${this.rm.apiUrl}/api/ideas`, idea, this.options)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.rm.handleError);
  }

  updateIdea(idea: Idea) {
    return this.http.put(`${this.rm.apiUrl}/api/ideas/${idea.id}`, {title: idea.title, description: idea.description }, this.options)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.rm.handleError);
  }

  deleteIdea(id: number) {
    return this.http.delete(`${this.rm.apiUrl}/api/ideas/${id}`, this.options)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.rm.handleError);
  }

  getIdea(id: number) {
    return this.http.get(`${this.rm.apiUrl}/api/ideas/${id}`, this.options)
      .map((response: Response) => {
        return response.json();
      })
      .catch(this.rm.handleError);
  }

}
