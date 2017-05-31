import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

//import { Observable } from 'rxjs/Observable';
import { DataService } from './data.service';

@Injectable()
export class RecomSiteService {

  constructor(
    private dataService: DataService
    ) { }

  dataUrl: string = "/api/recomSites";

  getRecomSites() {
    return this.dataService.getCookedData(this.dataUrl, this.extractData);
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
