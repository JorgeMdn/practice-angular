import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from './utils/helpers/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate {
  constructor(private readonly router: Router) {}
  canActivate(
    _: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (state.url.indexOf('login') > -1) {
        if (Auth.checkSession()) {
          return this.router.createUrlTree(['/']);
        } else {
          return true;
        }
      } else {
        if (!Auth.checkSession()) {
          return this.router.createUrlTree(['/login']);
        } else {
          return true;
        }
      }
  }

}
