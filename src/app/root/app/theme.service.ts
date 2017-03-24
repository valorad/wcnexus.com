import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ThemeService {

  constructor(private _http: Http) {
    this.getThemes().subscribe(
      (resTheme) => {this.themes = resTheme},
      (resError) => {this.themeError = resError}
    );
  }

  public themeRoot: string = "assets/images/themes/";

  private dataUrl: string = "../../../assets/data/theme.json";

  getThemes() {
    let themes = this._http.get(this.dataUrl).map(
      this.extractData
    )
    .catch(this.throwException);

    return themes;
  }

  extractData(res: Response) {
    let data = res.json() || [];
    return data;
  }

  throwException(error: Response) {
    console.error(error);
    return Observable.throw(error || "Server Error");
  }

  public themes: Array<Object> = [
      {
        id: 0,
        name: "tDefault",
        class: "themeDefault",
        themeImg: "wcn-theme-default.jpg",
        cover: "wcn-Default.png",
        slogan: "Connect wc worlds.",
        descrTitle: "wcNexus default theme",
        descr: "wcNexus is a nexus of wcWorlds"
      },
  ];
  public themeError: string;

  public runningTheme: Object = {
    currentTheme: "tDefault",
    currentThemeClass: "themeDefault",
    slogan: "Connect wc worlds.",
    coverImg: "assets/images/themes/tDefault/wcn-Default.png",
    themeImg: "assets/images/themes/tDefault/wcn-theme-default.jpg",
    themeDescrTitle: "wcNexus default theme",
    themeDescr: "wcNexus is a nexus of wcWorlds"
  }

  public getThemeByName(name: string): Object {
    for (let theme of this.themes) {
      if (theme["name"] === name) {
        return theme;
      }
    }
    return null;
  }

  public changeTheme(changedTheme: string) {

    let theme = this.getThemeByName(changedTheme);

    if (theme != null) {

      // sync current class
      this.runningTheme["currentThemeClass"] = theme["class"];

      // current theme changed to:
      this.runningTheme["currentTheme"] = changedTheme;
      //change cover and theme img
      this.runningTheme["coverImg"] = this.themeRoot + this.runningTheme["currentTheme"] + "/" + theme["cover"];
      this.runningTheme["themeImg"] = this.themeRoot + this.runningTheme["currentTheme"] + "/" + theme["themeImg"];
      //change slogan
      this.runningTheme["slogan"] = theme["slogan"];
      //change theme descr
      this.runningTheme["themeDescrTitle"] = theme["descrTitle"];
      this.runningTheme["themeDescr"] = theme["descr"];
    } else {
      console.error("Invalid theme name detected");
    }
  }

}
