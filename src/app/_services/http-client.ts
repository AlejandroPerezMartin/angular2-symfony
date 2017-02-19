import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response } from '@angular/http';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

Injectable()
export class HttpClient {

  public apiUrl: string = environment.API_URL;

  public headers = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  public options = new RequestOptions({ headers: this.headers, withCredentials: false });

  public extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  public handleError (error: Response) {
    return Observable.throw(error.json());
  }

}
