import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

//import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

import { DataService } from './data.service';

@Injectable()
export class UpcomingService {

  constructor(
    //private _http: Http,
    private dataService: DataService
    ) { }

  public dataUrl: string = "/api/upcomings";

  getUpcomings() {
    return this.dataService.getCookedData(this.dataUrl, this.extractData);
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
