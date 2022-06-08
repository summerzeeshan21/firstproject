import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { User } from 'src/app/models/users';
import { environment } from 'src/environments/environment';
import { AuthGuard } from './guard/auth-guard';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private notifyLogin = new Subject<any>();
  // eslint-disable-next-line @typescript-eslint/member-ordering
  notifyOnLogin$ = this.notifyLogin.asObservable();
  // eslint-disable-next-line @typescript-eslint/member-ordering
  user: User = new User();
  // eslint-disable-next-line @typescript-eslint/member-ordering
  public loading: any;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  lang: any = {};
  // eslint-disable-next-line @typescript-eslint/member-ordering
  selectedLanguage: any = { id: 2, title: 'English', file: 'en.json', flag: 'usa.PNG' };
  // eslint-disable-next-line @typescript-eslint/member-ordering
  appLang: string;
  // eslint-disable-next-line @typescript-eslint/member-ordering
  timezone: string;
  constructor(
    private http: HttpClient,
    private router: Router,
    private authGuard: AuthGuard
  ) {
    if (this.authGuard.getLoggedInUser()) {this.user = this.authGuard.getLoggedInUser();}
    this.notifyOnLogin$.subscribe(() => {
      console.log('User Logged in Successfully');
      this.user = this.authGuard.getLoggedInUser();
    });
    this.timezone = (((new Date().getTimezoneOffset()) * -1) / 60).toString();
  }
  get(url) {
    return new Promise((resolve, reject) => {
      const headers = {
        headers: new HttpHeaders({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'Content-Type': 'application/json',
          // eslint-disable-next-line @typescript-eslint/naming-convention
          Authorization: 'Bearer ' + this.user.token,
        })
      };
      this.http.get(url, headers)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          console.log(err);
          // eslint-disable-next-line eqeqeq
          if (err.status == 401) {this.router.navigate(['/login']);}
          reject(err);
        });
    });
  }
  delete(url) {
    return new Promise((resolve, reject) => {
      const headers = {
        headers: new HttpHeaders({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'Content-Type': 'application/json',
          // eslint-disable-next-line @typescript-eslint/naming-convention
          Authorization: 'Bearer ' + this.user.token,
        })
      };
      this.http.delete(url, headers)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          // eslint-disable-next-line eqeqeq
          if (err.status == 401) {this.router.navigate(['/login']);}
          reject(err);
        });
    });
  }
  post(url, data) {
    return new Promise((resolve, reject) => {
      const headers = {
        headers: new HttpHeaders({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'Content-Type': 'application/json',
          // eslint-disable-next-line @typescript-eslint/naming-convention
          Authorization: 'Bearer ' + this.user.token,
        })
      };
      data.timezone = this.timezone;
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      this.http.post(url, data, headers)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          // eslint-disable-next-line eqeqeq
          if (err.status == 401) {
            localStorage.removeItem('user');
            this.router.navigate(['/login']);
          }
          reject(err);
        }).unsubscribe;
    });
  }
  postNoAuth(url, data) {
    return new Promise((resolve, reject) => {
      const headers = {
        headers: new HttpHeaders({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'Content-Type': 'application/json',
        })
      };
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      this.http.post(url, data, headers)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          // eslint-disable-next-line eqeqeq
          if (err.status == 401) {
            localStorage.removeItem('user');
            this.router.navigate(['/login']);
          }
          reject(err);
        }).unsubscribe;
    });
  }
  getWithoutNoAuth(url) {
    return new Promise((resolve, reject) => {
      const headers = {
        headers: new HttpHeaders({
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'Content-Type': 'application/json',
        })
      };
      this.http.get(url, headers)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  notifyWhenLogin(data = {}) {
    this.notifyLogin.next(data);
  }
  uploadFile(url, param, files) {
    const httpOptions = {
      headers: new HttpHeaders({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Authorization: 'Bearer ' + this.user,
      })
    };
    const formData = new FormData();
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let index = 0; index < files.length; index++) {
      const element = files[index];
      formData.append(param, element);
    }
    return this.http
      .post<any>(
        environment.apiUrl + 'api/' + url + '?count=' + files.length,
        formData,
        httpOptions
      ).toPromise();
  }
}
