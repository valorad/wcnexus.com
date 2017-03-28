import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { tokenNotExpired } from 'angular2-jwt';

declare var Auth0Lock: any;

interface IAuth0 {
  secret: string,
  domain: string,
  client: string
}

@Injectable()
export class WcnauthService {

  
  // We'll use the Auth0 Lock widget for capturing user credentials
  private api = "/api/authy";
  private lock: any;
  private authyError: string;
  private authy: IAuth0;
  private userProfile: object = {
    picture: "null"
  };
  //private accessToken: string;

  constructor(
    private router: Router,
    private http: Http
  ) {
    // first, get necessary data, then proceed 
    this.getAuthy().subscribe(
      (resAuthy) => {this.authy = resAuthy.auth0},
      (resError) => {this.authyError = resError},
      () => {
        this.lock = new Auth0Lock(this.authy.client, this.authy.domain, {});
        this.finalizeLock();
        this.getUser();
      }
    );

  }

  finalizeLock() {
    this.lock.on('authenticated', (authResult: any) => {
      //this.accessToken = authResult.accessToken;
      localStorage.setItem('id_token', authResult.idToken);

      this.lock.getProfile(authResult.idToken, (error: any, profile: any) => {
        if (error) {
          console.log(error);
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        this.getUser();
      });

      this.lock.hide();
    });
  }

  getUser() {
    // let token = localStorage.getItem('id_token');
    // if(token) {
      let profile = JSON.parse(localStorage.getItem('profile'));
      if (profile !== null) {
        this.userProfile = profile;
        //console.log(this.userProfile);
      }

    // }
  }

  getAuthy() {
    let authy = this.http.get(this.api).map(
      this.extractData
    )
    .catch(this.throwException);

    return authy;
  }

  throwException(error: Response) {
    console.error(error);
    return Observable.throw(error || "Server Error");
  }

  extractData(res: Response) {
    let data = res.json() || [];
    return data;
  }

  // Display the lock widget
  login() {
    this.lock.show();
  }



  // Log the user out
  logout() {
    // To log out, just remove the token and profile from local storage
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    // Send the user back to the index page after logout
    this.router.navigateByUrl('/index');
  }

  // Check to see if the user is logged in. We'll be able to tell by checking to see if they have a token and whether that token is valid or not.
  loggedIn() {
    return tokenNotExpired();
  }


}
