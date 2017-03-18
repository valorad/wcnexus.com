import { Component, OnInit } from '@angular/core';

import { ThemeService } from './theme.service';

import * as $ from 'jquery';

@Component({
  selector: 'wcnexus',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wcNexus';

  constructor(private themeService: ThemeService) {
    // this.themeRoot = themeService.themeRoot;
    // this.themes = themeService.themes;
    // this.runningTheme = themeService.runningTheme;
    // this.getThemeByName = themeService.getThemeByName;
    // this.changeTheme = themeService.changeTheme;
    this.themeService = themeService;
  }

// themes 

  public themeRoot: string = "";

  public themes: any;

  // default theme settings

  public runningTheme = {
  }

  // public theme: object = this.themes[3]; // default to fallout theme

  // public currentTheme: string = this.theme["name"]; // Currrent running theme

  // public slogan: string = this.theme["slogan"]; // Currrent displaying slogan

  // public coverImg: string = this.themeRoot + this.currentTheme + "/" + this.theme["cover"];
  // public themeImg: string = this.themeRoot + this.currentTheme + "/" + this.theme["themeImg"];

  // public themeDescrTitle: string = this.theme["descrTitle"];
  // public themeDescr: string = this.theme["descr"];



  //select a theme by name. Will be handed over to Mongo in the future.
  //public getThemeByName: Function 
    // for (let theme of this.themes) {
    //   if (theme.name === name) {
    //     return theme;
    //   }
    // }
    // return null;
  
  //public changeTheme: Function 

  //nav bar class
  private navbarClass: string = "Opacified";

  private navbarMenuClass: string = "navbar-nav mr-auto HiddenltLG";



  toggleNav() {
    this.navbarClass = (this.navbarClass == "" ? "Opacified" : "");
  }

  toggleNavMenu() {
    let startPos = this.navbarMenuClass.indexOf("HiddenltLG");
    // if navbarMenuClass contains "HiddenltLG" then remove this class
    if (startPos >= 0) {
      this.navbarMenuClass = this.navbarMenuClass.slice(0, startPos - 1);
    }
    else {
      // navbarMenuClass does not contain "HiddenltLG", then add this class
      this.navbarMenuClass += " HiddenltLG";
    }
  }

  ngOnInit() {
    this.themeService.changeTheme("tFallout");
  }

}
