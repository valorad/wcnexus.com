import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { AppMiscService } from './app-misc.service';

@Injectable()
export class UpcomingService {

  constructor(
    private _http: Http,
    private appMiscService: AppMiscService
    ) { }

  public dataUrl: string = "assets/data/upcoming.json";

  getUpcomings() {
    return this.appMiscService.getCookedData(this.dataUrl, this.extractData);
  }

  extractData(res: Response) {
    let data = res.json() || [];
    for (let datium of data) {
      if (datium["img"] !== (null||undefined||'')) {
        datium["img"] = "assets/images/upcomings/" + datium["img"];
      }
    }
    return data;
  }

  // throwException(error: Response) {
  //   console.error(error);
  //   return Observable.throw(error || "Server Error");
  // }


}
