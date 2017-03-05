import { Component, OnInit } from '@angular/core';

import * as $ from "jquery";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  themeRoot: string = "assets/images/themes/";

  themes = [
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
    }
  ]

  // default theme settings

  theme: object = this.themes[2]; // default to fallout theme

  currentTheme: string = this.theme["name"]; // Currrent running theme

  slogan: string = this.theme["slogan"]; // Currrent displaying slogan

  coverImg: string = this.themeRoot + this.currentTheme + "/" + this.theme["cover"];
  themeImg: string = this.themeRoot + this.currentTheme + "/" + this.theme["themeImg"];

  themeDescrTitle: string = this.theme["descrTitle"];
  themeDescr: string = this.theme["descr"];

  selectedTheme: string = this.currentTheme; //Theme selected in the modal selection interface.

  //select a theme by name. Will be handed over to Mongo in the future.
  getThemeByName(name: string): object {
    for (let theme of this.themes) {
      if (theme.name === name) {
        return theme;
      }
    }
    return null;
  }

  changeTheme(changedTheme: string) {

    let theme = this.getThemeByName(changedTheme);

    if (theme != null) {
      //clear body class
      $('body').removeClass();
      //add body class
      $('body').addClass(theme["class"]);
      // current theme changed to:
      this.currentTheme = changedTheme;
      //change cover and theme img
      this.coverImg = this.themeRoot + this.currentTheme + "/" + theme["cover"];
      this.themeImg = this.themeRoot + this.currentTheme + "/" + theme["themeImg"];
      //change slogan
      this.slogan = theme["slogan"];
      //change theme descr
      this.themeDescrTitle = theme["descrTitle"];
      this.themeDescr = theme["descr"];
    } else {
      console.error("Invalid theme name detected");
    }
  }


  ngOnInit() {
  }

  selectATheme(e) {
    this.selectedTheme = e.target.attributes.value.value;
    console.log("Theme selected as " + this.selectedTheme);
  }

}
