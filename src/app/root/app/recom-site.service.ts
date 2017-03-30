import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

//import { Observable } from 'rxjs/Observable';
import { AppMiscService } from './app-misc.service';

@Injectable()
export class RecomSiteService {

  constructor(
    private appMiscService: AppMiscService
    ) { }

  dataUrl: string = "/api/recomSites";

  getRecomSites() {
    return this.appMiscService.getCookedData(this.dataUrl, this.extractData);
  }

  extractData(res: Response) {
    let data = res.json() || [];
    for (let datium of data) {
      if (datium["img"] !== (null||undefined||'')) {
        datium["img"] = "assets/images/media/recomSite/" + datium["img"];
      }
    }
    return data;
  }

}
