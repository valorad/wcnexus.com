import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

import * as $ from "jquery";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [ThemeService]
})
export class IndexComponent implements OnInit {

  constructor(private themeService: ThemeService) {
    this.themeRoot = themeService.themeRoot;
    this.runningTheme = themeService.runningTheme;
    this.changeTheme = themeService.changeTheme;
   }

  themeRoot: string = "";

  changeTheme: Function;

  runningTheme: object = {};

  private selectedTheme: string = "";

  // changeTheme(changedTheme: string) {

  //   let theme = this.getThemeByName(changedTheme);

  //   if (theme != null) {
  //     //clear body class
  //     $('body').removeClass();
  //     //add body class
  //     $('body').addClass(theme["class"]);
  //     // current theme changed to:
  //     this.currentTheme = changedTheme;
  //     //change cover and theme img
  //     this.coverImg = this.themeRoot + this.currentTheme + "/" + theme["cover"];
  //     this.themeImg = this.themeRoot + this.currentTheme + "/" + theme["themeImg"];
  //     //change slogan
  //     this.slogan = theme["slogan"];
  //     //change theme descr
  //     this.themeDescrTitle = theme["descrTitle"];
  //     this.themeDescr = theme["descr"];
  //   } else {
  //     console.error("Invalid theme name detected");
  //   }
  // }


  ngOnInit() {
    //this.changeTheme(this.selectedTheme);
  }

  selectATheme(e) {
    this.selectedTheme = e.target.attributes.value.value;
    console.log("Theme selected as " + this.selectedTheme);
  }

}
