import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private cookieService: CookieService,
  ) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.getCookie("user")) this.router.navigate(["/auth/login"]);
    return true;
  }
  setCookie(cname, cvalue, exdays=null) {
    this.cookieService.set(cname, cvalue,{ expires: 10, sameSite: 'Lax' });
    document.cookie = `user=${cvalue};path=/;domain=gotec.pk`;
    // var d = new Date();
    // d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    // var expires = "expires=" + d.toUTCString();
    // document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
    document.cookie = name + '=; Max-Age=-99999999;domain=gotec.pk';
  }
  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return false;
  }
  getFeatures() {
    const features = localStorage.getItem("features");
    if (features) return JSON.parse(features);
  }
  getLoggedInUser() {
    const user = this.cookieService.get("user");
    if (user) {
      let data = JSON.parse(user);
      data.token=JSON.parse(localStorage.getItem("token"));
      const company = localStorage.getItem("company");
      const businessType=localStorage.getItem("businessType");
      if (company) {
        const _company = JSON.parse(company);
        data["company"] = _company;
      }
      if(businessType)data["businessType"]=JSON.parse(businessType);
      return data;
    }
  }

}