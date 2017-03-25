import { Component, OnInit, ViewChild  } from '@angular/core';
import { ThemeService } from '../theme.service';
import { UpcomingService } from '../upcoming.service';

import { ModalDirective } from 'ng2-bootstrap/modal';

import * as $ from "jquery";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private themeService: ThemeService,
    private upcomingService: UpcomingService
    ) {

   }

  private upcomings: any = [{
        "id": "0",
        "img": "",
        "title": "default",
        "descr": "loading..."
    }];
  private error: string;

  themeRoot: string = this.themeService.themeRoot;

  //changeTheme: Function = this.themeService.changeTheme;

  runningTheme: any = this.themeService["runningTheme"];

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
    this.upcomingService.getUpcomings().subscribe(
      (resUpcomings) => {this.upcomings = resUpcomings},
      (resError) => {this.error = resError}
    );
  }

  selectATheme(e) {
    this.selectedTheme = e.target.attributes.value.value;
    console.log("Theme selected as " + this.selectedTheme);
  }

  deSelectATheme() {
    this.selectedTheme = this.themeService.runningTheme["currentTheme"];
  }

  msE(ph: Boolean = false) {
    this.showModal2();
    this.msRes= (ph? "Welcome home!" : "You are not worthy!");
  }

/* theme Modal related */
  @ViewChild('selThemeModal') public selThemeModal: ModalDirective;
  public isThemeModalShown: boolean = false;
 
  public showModal(): void {
    this.isThemeModalShown = true;
  }
 
  public hideModal(): void {
    this.selThemeModal.hide();
  }
 
  public onHidden(): void {
    this.isThemeModalShown = false;
  }

/* ms Modal Related*/
  @ViewChild('msDialog') public msDialog: ModalDirective;

  public isMSModalShown: boolean = false;
  public msRes: string = "";
 
  public showModal2(): void {
    this.isMSModalShown = true;
  }
 
  public hideModal2(): void {
    this.msDialog.hide();
  }
 
  public onHidden2(): void {
    this.isMSModalShown = false;
  }

}
