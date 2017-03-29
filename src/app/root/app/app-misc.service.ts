import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AppMiscService {

  

  constructor(private http: Http) { }

  getRawData(url: string) {
    let data = this.http.get(url).map(
      this.extractData
    )
    .catch(this.throwException);

    return data;
  }

  throwException(error: Response) {
    console.error(error);
    return Observable.throw(error || "Server Error");
  }

  extractData(res: Response) {
    let data = res.json() || [];
    return data;
  }


}
