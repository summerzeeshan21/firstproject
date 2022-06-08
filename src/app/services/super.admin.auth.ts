import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
// import { UserTypes } from '../models/user';
import { AuthGuard } from './guard/auth-guard';
// import { UserTypes } from '../app.component';
@Injectable({
  providedIn: 'root'
})
export class SuperAdminAuth implements CanActivate {
  user: User = new User();
  assignedFeatures: any[] = [];
  constructor(
    private router: Router,
    private authGuard: AuthGuard,
  ) {
    this.user = this.authGuard.getLoggedInUser();
  }
  canActivate(
    _next: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // eslint-disable-next-line eqeqeq
      if (this.user.userType != UserTypes.SuperAdmin) {
      return this.router.navigate(['/not-authorized']);
    }
    return true;
  }

}
