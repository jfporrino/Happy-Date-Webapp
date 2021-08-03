import {Injectable} from '@angular/core';
import {
    CanActivate,
    CanActivateChild,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router
} from '@angular/router';

import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';


@Injectable({providedIn: 'root'})
export class IsDateGuard implements CanActivateChild, CanActivate {

    constructor(private router: Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.handleGuard();
    }

    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.handleGuard();
    }

    handleGuard(): boolean {
        // const happyDate: Date = new Date(2021, 7, 16, 0, 0, 0);
        // const happyDate: Date = new Date(2021, 7, 2, 21, 47, 0);
        const now: Date = new Date();
        const notYet = now.getTime() < environment.happyDate.getTime();

        console.log('notYet', notYet);
        if (notYet) {
            this.router.navigate(['/countdown']);
        }
        return true;
    }
}
