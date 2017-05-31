import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

// Import our authentication service
import { WcnauthService } from './wcnauth.service';

@Injectable()
export class WcnauthGuardService implements CanActivate {

  constructor(private auth: WcnauthService, private router: Router) { }

  canActivate() {
    // user not logged in will be sent to (login page but now homepage)
    if (!this.auth.loggedIn()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }

}
