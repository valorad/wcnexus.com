import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  themes = [
    'white',
    'black'
  ];

  currentClass: string = this.themes[0];
  baseClass = " display col-md-12 card";
  currentAppliedClass = this.currentClass + this.baseClass;

  changeClass(toClass: string) {
    this.currentClass = toClass;
    this.currentAppliedClass = toClass + this.baseClass;
  }



}
