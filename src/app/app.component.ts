import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wcNexus';

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
}
