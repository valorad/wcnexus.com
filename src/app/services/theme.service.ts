import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

import { DataService } from './data.service';

@Injectable()
export class ThemeService {

  constructor(
    private _http: Http, 
    private dataService: DataService
  ) {
    //get themes
    // this.appMiscService.getRawData(this.dataUrl).subscribe(
    //   (resTheme) => {this.themes = resTheme},
    //   (resError) => {this.themeError = resError}
    // );
  }

  public themeRoot: string = "assets/images/themes/";

  //public dataUrl: string = "assets/data/theme.json";

  public urlSingle: string = "/api/theme/name/";
  public urlToChoose: string = "/api/theme/choose";

  getThemesToChoose() {
    return this.dataService.getCookedData(this.urlToChoose, this.extractData);
  }

  // extractData(res: Response) {
  //   let data = res.json() || [];
  //   return data;
  // }

  // throwException(error: Response) {
  //   console.error(error);
  //   return Observable.throw(error || "Server Error");
  // }

  public extractData(res: Response) {
    let data = res.json() || [];
    for (let datium of data) {
      if (datium["titleImg"] !== (null||undefined||'')) {
        datium["titleImg"] = "assets/images/themes/" + datium["name"] + "/" + datium["titleImg"];
      }
      if (datium["cover"] !== (null||undefined||'')) {
        datium["cover"] = "assets/images/themes/" + datium["name"] + "/" + datium["cover"];
      }
    }
    return data;
  }

  // public themes: Array<Object> = [
  //     {
  //     },
  // ];
  //public themeError: string;

  public runningTheme: Object = {
    name: "tDefault",
    className: "themeDefault",
    title: "wcNexus default theme",
    titleImg: "assets/images/themes/tDefault/wcn-theme-default.jpg",
    descr: "wcNexus is a nexus of wcWorlds",
    cover: "assets/images/themes/tDefault/wcn-Default.png",
    slogan: "Connect wc worlds."
  }

  // public getThemeByName(name: string): Object {
  //   for (let theme of this.themes) {
  //     if (theme["name"] === name) {
  //       return theme;
  //     }
  //   }
  //   return null;
  // }

  public changeTheme(changedTheme: string) {

    // load a single theme from database

    let themeServiceInstance = this;

    this.dataService.getCookedData((this.urlSingle + changedTheme), this.extractData).subscribe(
      (resSingleTheme) => {
        let theme = resSingleTheme;
        if (theme != null) {

          themeServiceInstance.runningTheme = theme[0]; // data retrieved from mongo is an array, not an object

          // // sync current class
          // this.runningTheme["currentThemeClass"] = theme["class"];

          // // current theme changed to:
          // this.runningTheme["currentTheme"] = changedTheme;
          // //change cover and theme img
          // this.runningTheme["coverImg"] = this.themeRoot + this.runningTheme["currentTheme"] + "/" + theme["cover"];
          // this.runningTheme["themeImg"] = this.themeRoot + this.runningTheme["currentTheme"] + "/" + theme["themeImg"];
          // //change slogan
          // this.runningTheme["slogan"] = theme["slogan"];
          // //change theme descr
          // this.runningTheme["themeDescrTitle"] = theme["descrTitle"];
          // this.runningTheme["themeDescr"] = theme["descr"];
        } else {
          console.error(`There is no theme in database or ${ changedTheme } is invalid.`);
        }
      }
    );
    
    //let theme = this.getThemeByName(changedTheme);
  }

}
