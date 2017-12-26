/* The service handling theme changes when navigating to different modules */
import { Injectable } from '@angular/core';

@Injectable()
export class ThemeService {

  public config = {
    current: "mat-blue-pink"
  }

  constructor(
    
  ) { }

}
