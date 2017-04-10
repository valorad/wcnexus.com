import { Component, OnInit, ViewChild  } from '@angular/core';

import { AppMiscService } from '../app-misc.service';
import { ThemeService } from '../theme.service';
import { UpcomingService } from '../upcoming.service';
import { RecomSiteService } from '../recom-site.service';

import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    private appMiscService: AppMiscService,
    private themeService: ThemeService,
    private upcomingService: UpcomingService,
    private recomSiteService: RecomSiteService
    ) {

   }

  private upcomings: any = [  ];
  private error: string;

  //themeRoot: string = this.themeService.themeRoot;

  //changeTheme: Function = this.themeService.changeTheme;

  //runningTheme: any = this.themeService["runningTheme"];

  private selectedTheme: string = "";
 // private themes: any;
  private themesToChoose: any = [
    {
      name: "tDefault",
      title: "wcNexus default theme",
      titleImg: "wcn-theme-default.jpg"
    }
  ]
  private recomSites: any = [{
      "title": "Skyrim",
      "img": "testskyrim.jpg",
      "descr": "wc's favorite RPG game.",
      "link": "http://store.steampowered.com/app/489830/"
  }];

  ngOnInit() {

    // get recom site carousel data
    this.recomSiteService.getRecomSites().subscribe(
      (resRecSite) => { 
        if (resRecSite != null) {
          this.recomSites = resRecSite;
        }
       }
    );

    //retrieve theme selections
    this.themeService.getThemesToChoose().subscribe(
      (resThemesToChoose) => {
        if (resThemesToChoose != null) {
          this.themesToChoose = resThemesToChoose;
        }
      }
    );

    // this.appMiscService.getRawData(this.themeService.dataUrl).subscribe(
    //   (resTheme) => {this.themeToChoose = resTheme}
    // );

    // let _themesToChoose = this.themeService.getThemesToChoose();
    // if (_themesToChoose != null) {
    //   this.themesToChoose = _themesToChoose;
    // } else {
    //   console.error("failed to fetch themes to choose");
    // }
    
    //retrieve upcomings
    this.upcomingService.getUpcomings().subscribe(
      (resUpcomings) => { 
        if (resUpcomings != null) {
          this.upcomings = resUpcomings
        }
      },
      (resError) => {this.error = resError}
    );
    
  }

  selectATheme(e) {
    this.selectedTheme = e.currentTarget.title;
    console.log("Theme selected as " + this.selectedTheme);
  }

  deSelectATheme() {
    this.selectedTheme = this.themeService.runningTheme["name"];
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
