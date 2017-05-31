import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { DataService } from '../../services/data.service';
import { WcnauthService } from  '../../services/wcnauth.service';
import { ThemeService } from '../../services/theme.service';

import { ISite } from "../../interfaces/ISite.interface";

@Component({
  selector: 'wcnexus',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wcNexus';

  constructor(
    private dataService: DataService,
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
        domain: "string",
        client: "string"
    }
  };

  //site settings
  private api = "/assets/data/wcnexus.json";


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
    this.dataService.getRawData(this.api).subscribe(
      (resSite) => {this.site = resSite[0]},
      (resError) => {console.error(resError)}
    );

    this.themeService.changeTheme("tFallout");

    // retrieve themes
    // this.appMiscService.getRawData(this.themeService.dataUrl).subscribe(
    //   (resThemes) => {
    //     let themeName = resThemes[2]["name"];
    //     this.themeService.changeTheme(themeName);
    //   }
    // );
  }
}