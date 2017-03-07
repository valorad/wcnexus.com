import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ThemeService {

  constructor() { }

  public themeRoot: string = "assets/images/themes/";

  public themes = [
      {
        id: 0,
        name: "tDefault",
        class: "themeDefault",
        themeImg: "wcn-theme-fallout.jpg",
        cover: "wcn-Fallout.png",
        slogan: "Connect wc worlds.",
        descrTitle: "wcNexus default theme",
        descr: "wcNexus is a nexus of wcWorlds"
      },
      {
        id: 1,
        name: "tAC",
        class: "themeAC",
        themeImg: "wcn-theme-ac.jpg",
        cover: "wcn-AC.png",
        slogan: "We work in the dark to serve the light.",
        descrTitle: "Assassin's creed",
        descr: "Action game presented by Ubisoft."
      },
      {
        id: 2,
        name: "tFallout",
        class: "themeFallout",
        themeImg: "wcn-theme-fallout.jpg",
        cover: "wcn-Fallout.png",
        slogan: "Var, var never changes.",
        descrTitle: "Fallout",
        descr: "RPG survival game made by Bethesda Softworks LLC"
      },
      {
        id: 3,
        name: "tTES",
        class: "themeTES",
        themeImg: "wcn-theme-tes.jpg",
        cover: "wcn-TES.png",
        slogan: "Var, var never changes.",
        descrTitle: "Elder Scroll",
        descr: "RPG game that is Bethesda's Qin er zi"
      }
    ]

  public runningTheme: object = {
    currentTheme: "",
    slogan: "",
    coverImg: "",
    themeImg: "",
    themeDescrTitle: "",
    themeDescr: ""
  }

  public getThemeByName(name: string): object {
    for (let theme of this.themes) {
      if (theme.name === name) {
        return theme;
      }
    }
    return null;
  }

  public changeTheme(changedTheme: string) {

    let theme = this.getThemeByName(changedTheme);

    if (theme != null) {
      //clear body class
      $('body').removeClass();
      //add body class
      $('body').addClass(theme["class"]);
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
