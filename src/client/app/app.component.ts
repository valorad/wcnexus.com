import { Component, ChangeDetectorRef, ViewChild, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

// services
import { TranslateService } from '@ngx-translate/core';

import { ThemeService } from './_services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MediaMatcher]
})
export class AppComponent implements OnInit, OnDestroy { 

  @ViewChild('sidenav') sidenav: MatSidenav;
  @ViewChild('sideNavContainer') sideNavContainer: any; // MatSidenavContainer

  mobileQuery: MediaQueryList;
  _mobileQueryListener: () => void;

  currentLang = "en";
  navList: any[] = [
    {
      title: {
        en: "Index",
        zh: "首页"
      },
      link: "/index",
      exterior: false // set to true if a use "href=" attr, to false to use "routerLink="
    },
    {
      title: {
        en: "Venture",
        zh: "冒险"
      },
      link: "/venture",
      exterior: true
    }
  ];

  languageList: any[] = [
    {
      name: "en",
      descr: "English"
    },
    {
      name: "zh",
      descr: "中文"
    }
  ];

  openSideNav = async () => {
    this.sideNavContainer._element.nativeElement.style.display = 'block';
    await this.sidenav.open();
  };

  closeSideNav = async () => {
    await this.sidenav.close();
    this.sideNavContainer._element.nativeElement.style.display = 'none';
  };

  changeLang = (toLang: string) => {
    return new Promise((resolve, reject) => {
      this.translateService.use(toLang).subscribe(
        (next) => {
          this.currentLang = toLang;
          resolve("OK");
        },
        (err) => {
          console.error(err);
          reject(err);
        }
      );
    });
  };

  constructor(
		public translateService: TranslateService,
    public themeService: ThemeService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    // ng material2 cdk media fetch
    this.mobileQuery = media.matchMedia('(max-width: 992px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    // i18n
    let langs: string[] = [];
    for (let lang of this.languageList) {
      langs.push(lang.name);
    }
    translateService.addLangs(langs);
    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang('en');
    let browserLang = translateService.getBrowserLang();
    let langRegX = new RegExp(langs.join("|"));
    translateService.use(browserLang.match(langRegX) ? browserLang : 'en');
  }

  ngOnInit() {
    this.currentLang = this.translateService.currentLang;
  }

  ngOnDestroy() {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}