import { Component, OnInit } from '@angular/core';

import { ThemeService } from './theme.service';

@Component({
  selector: 'wcnexus',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wcNexus';

  constructor(private themeService: ThemeService) {
    this.themeService = themeService;
  }

// themes 

  public themeRoot: string = "";

  public themes: any;


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
