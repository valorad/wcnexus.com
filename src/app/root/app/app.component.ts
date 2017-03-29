import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { AppMiscService } from './app-misc.service';
import { WcnauthService } from  './wcnauth.service';
import { ThemeService } from './theme.service';

import { ISite } from "./ISite.interface";

@Component({
  selector: 'wcnexus',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wcNexus';

  constructor(
    private appMiscService: AppMiscService,
    private themeService: ThemeService,
    @Inject(DOCUMENT) private document,
    private authService: WcnauthService) {
    this.themeService = themeService;
  }

// themes 

  public themeRoot: string = "";

  public themes: any;

  public site: ISite = {
    site: "string",
    caseNumber: "",
    auth0: {
        secret: "string",
        domain: "string",
        client: "string"
    }
  };

  //site settings
  private api = "/api/site";


  //nav bar class
  // private navbarClass: string = "Opacified";

  // private navbarMenuClass: string = "navbar-nav mr-auto HiddenltLG";



  // toggleNav() {
  //   this.navbarClass = (this.navbarClass == "" ? "Opacified" : "");
  // }

  // nav bar shown or not
  private sidenavShown: Boolean = false;
  private navExit: Boolean = true;

  toggleSideNav() {
    this.sidenavShown = !this.sidenavShown;
    this.navExit = !this.navExit;
    this.document.querySelector('body').classList.toggle("navOpen");
  }


  ngOnInit() {
    //get site settings for case number
    this.appMiscService.getRawData(this.api).subscribe(
      (resSite) => {this.site = resSite},
      (resError) => {console.error(resError)}
    );
    // retrieve themes
    this.appMiscService.getRawData(this.themeService.dataUrl).subscribe(
      (resThemes) => {
        let themeName = resThemes[2]["name"];
        this.themeService.changeTheme(themeName);
      }
    );
  }
}