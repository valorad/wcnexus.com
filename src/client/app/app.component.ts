import { Component } from '@angular/core';

// services
import { ThemeService } from './_services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  constructor(
    public themeService: ThemeService
  ) {}
}