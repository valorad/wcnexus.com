import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'body',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {

  constructor() { }

  public bodyClass: string;

  // toggleNavMenu() {
  //   let startPos = this.navbarMenuClass.indexOf("HiddenltLG");
  //   // if navbarMenuClass contains "HiddenltLG" then remove this class
  //   if (startPos >= 0) {
  //     this.navbarMenuClass = this.navbarMenuClass.slice(0, startPos - 1);
  //   }
  //   else {
  //     // navbarMenuClass does not contain "HiddenltLG", then add this class
  //     this.navbarMenuClass += " HiddenltLG";
  //   }
  // }

  ngOnInit() {
  }

}
