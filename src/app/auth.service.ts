import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  post(url: string, model: any) {
    throw new Error('Method not implemented.');
  }
  notifyWhenLogin(data: any) {
    throw new Error('Method not implemented.');
  }
private isloggedIn:boolean;
model: any = { phone: null, password: null, };

  constructor(
    private httpp:HttpClient
  ) { 
  }
}
