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

  // nav bar shown or not
  private sidenavShown: Boolean = false;

  toggleSideNav() {
    this.sidenavShown = !this.sidenavShown;
  }


  ngOnInit() {
    this.themeService.changeTheme("tFallout");
  }

}