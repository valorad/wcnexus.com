import { Component, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

// services
import { ThemeService } from './_services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MediaMatcher]
})
export class AppComponent { 

  @ViewChild('sidenav') sidenav: ElementRef;
  @ViewChild('sideNavContainer') sideNavContainer: any; // MatSidenavContainer

  mobileQuery: MediaQueryList;
  _mobileQueryListener: () => void;
  navList: any[] = [
    {
      title: "index",
      link: "/index",
      exterior: false // set to true if a use "href=" attr, to false to use "routerLink="
    },
    {
      title: "venture",
      link: "/",
      exterior: true
    }
  ];

  constructor(
    public themeService: ThemeService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 992px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  // toggleSideNav = () => {
  //   let _sideNav: any = this.sidenav;
  //   if (_sideNav) {
  //     _sideNav.toggle();
  //   }

  // };

  setSideNavOverflow = (switchHiddenOn: boolean) => {
    switchHiddenOn? this.sideNavContainer._element.nativeElement.style.overflow = 'hidden':
     this.sideNavContainer._element.nativeElement.style.overflow = 'auto';
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}