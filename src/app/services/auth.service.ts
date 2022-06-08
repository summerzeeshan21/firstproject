import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { User } from '../models/user';
import { AuthGuard } from './guard/auth-guard';
import { User } from '../models/users';
import { UserTypes } from '../app.component';
import { Features } from '../shared/service/nav.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  user: User = new User();
  assignedFeatures: any[] = [];
  constructor(
    private router: Router,
    private authGuard: AuthGuard,
  ) {
    this.user = this.authGuard.getLoggedInUser();
    // eslint-disable-next-line eqeqeq
    if (this.user.userType != UserTypes.SuperAdmin) {
      this.assignedFeatures = this.authGuard.getFeatures();
    }
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // eslint-disable-next-line eqeqeq
    if (this.user.userType != UserTypes.SuperAdmin) {
      // eslint-disable-next-line eqeqeq
      const allowed = this.assignedFeatures.find(x => x.id == next.data.id);
      // eslint-disable-next-line eqeqeq
      if (!allowed&&(next.data.id!=Features.FBRInvoice)) {return this.router.navigate(['/not-authorized']);}
    }
    //if (!this.getCookie("user")) this.router.navigate(["/auth/login"]);
    return true;
  }

}
