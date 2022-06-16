import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlHandler } from '../services/urlHandler/url-handler';
import { ApiService } from '../services/api.service';
import { AuthGuard } from '../services/guard/auth-guard';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { EventsService } from '../services/events.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  model: any = { phone: null, password: null, };
  constructor(
    private httpp: HttpClient,
    private urlHandler: UrlHandler,
    private apiService: ApiService,
    private authGuard: AuthGuard,
    private router: Router,
    private events:EventsService,

  ) { }

  ngOnInit() {
  }
  // onSubmit() {
  //   console.log("before apicall", this.model);
  //   const url = environment.apiUrl+ 'user/register';
  //   this.httpp.post(url, this.model).subscribe((res: any) => {
  //       console.log('after api call', res);
  //       if (!res) {
  //         alert('invalid user name and password');
  //       } else {
  //         const data = res.body;
  //         // localStorage.setItem('token', JSON.stringify(res.token));
  //         if (data) {
  //           localStorage.setItem('company', JSON.stringify(data.company));
  //           delete data.company;
  //           data.developerNote = res.developerNote;
  //           // this.authGuard.setCookie('token', JSON.stringify(data), 365);
  //           this.events.publish("user:login", data);
  //           this.apiService.notifyWhenLogin(data);
  //           this.router.navigate(['/']);

  //         }
  //         console.log("afterAll", res)
  //       }
  //     });
  // }
  save() {
    console.log(this.model);
    const url = environment.apiUrl+ 'user/register';
    this.httpp.post(url, this.model).subscribe(result => {
      if(result["success"]){
        localStorage.setItem("token",result["token"]);
        this.router.navigate(["/"]);
      }
      else alert(result["message"])
      console.log(result);
    }
    );
  }
}
