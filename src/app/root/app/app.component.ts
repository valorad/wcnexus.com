import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

import { ThemeService } from './theme.service';

@Component({
  selector: 'wcnexus',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'wcNexus';

  constructor(private themeService: ThemeService,@Inject(DOCUMENT) private document) {
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

  // nav bar shown or not
  private sidenavShown: Boolean = false;
  private navExit: Boolean = true;

  toggleSideNav() {
    this.sidenavShown = !this.sidenavShown;
    this.navExit = !this.navExit;
    this.document.querySelector('body').classList.toggle("navOpen");
  }


  ngOnInit() {
    this.themeService.changeTheme("tFallout");
  }

}