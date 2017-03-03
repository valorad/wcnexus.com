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

  theme = {
    tDefault: {
      class: "themeDefault",
      themeImg: "wcn-theme-fallout.jpg",
      cover: "wcn-Fallout.png",
      slogan: "Connect wc worlds.",
      descrTitle: "wcNexus default theme",
      descr: "wcNexus is a nexus of wcWorlds"
    },

    tAC: {
      class: "themeAC",
      themeImg: "wcn-theme-ac.jpg",
      cover: "wcn-AC.png",
      slogan: "We work in the dark to serve the light.",
      descrTitle: "Assassin's creed",
      descr: "Action game presented by Ubisoft."
    },

    tFallout: {
      class: "themeFallout",
      themeImg: "wcn-theme-fallout.jpg",
      cover: "wcn-Fallout.png",
      slogan: "Var, var never changes.",
      descrTitle: "Fallout",
      descr: "RPG survival game made by Bethesda Softworks LLC"
    }

  }

  currentTheme: string = "tFallout"; // Currrent running theme

  slogan: string = this.theme[this.currentTheme]["slogan"];

  coverImg: string = this.themeRoot + this.currentTheme + "/" + "wcn-Fallout.png";
  themeImg: string = this.themeRoot + this.currentTheme + "/" + "wcn-theme-fallout.jpg";

  themeDescrTitle: string = this.theme[this.currentTheme]["descrTitle"];
  themeDescr: string = this.theme[this.currentTheme]["descr"];

  selectedTheme: string = ""; //Theme selected in the modal selection interface.

  changeTheme(changedTheme: string) {
    //change body class

    //clear body class
    $('body').removeClass();

    //add body class
    $('body').addClass(this.theme[changedTheme].class);

    // current theme changed to:
    this.currentTheme = changedTheme;

    //change cover and theme img
    this.coverImg = this.themeRoot + this.currentTheme + "/" + this.theme[this.currentTheme]["cover"];
    this.themeImg = this.themeRoot + this.currentTheme + "/" + this.theme[this.currentTheme]["themeImg"];

    //change slogan
    this.slogan = this.theme[this.currentTheme]["slogan"];

    //change theme descr
    this.themeDescrTitle = this.theme[this.currentTheme]["descrTitle"];
    this.themeDescr = this.theme[this.currentTheme]["descr"];
  }


  ngOnInit() {
  }

  selectATheme(e) {
    this.selectedTheme = e.target.attributes.value.value;
    console.log("Theme selected as " + this.selectedTheme);
  }

}
