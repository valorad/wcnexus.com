import { Component, ChangeDetectorRef, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

// services
import { ThemeService } from './_services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MediaMatcher]
})
export class AppComponent implements OnDestroy { 

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

  setSideNavToTop = (switchToTop: boolean) => {
    switchToTop? this.sideNavContainer._element.nativeElement.style.zIndex = '150':
     this.sideNavContainer._element.nativeElement.style.zIndex = '80';
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}