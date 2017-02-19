import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

Injectable()
export class HttpClient {

  public apiUrl: string = environment.API_URL;

  private headers = new Headers({
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  public options = new RequestOptions({ headers: this.headers, withCredentials: true });

  public extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  public handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    return Observable.throw(errMsg);
  }

}
