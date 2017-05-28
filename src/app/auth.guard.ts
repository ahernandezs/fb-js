import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  canActivate() {
    return localStorage.getItem('fb_auth') ? true : false;
  }
}
