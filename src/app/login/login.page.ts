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
  authService: any;
  constructor(
    private httpp: HttpClient,
    private urlHandler: UrlHandler,
    private apiService: ApiService,
    private authGuard: AuthGuard,
    private router: Router,
    private events: EventsService,

  ) { }

  ngOnInit() {
  }
  onSubmit() {
    console.log("before apicall", this.model);
    const url = environment.apiUrl + 'user/register';
    this.httpp.post(url, this.model).subscribe((res: any) => {
      console.log('after api call', res);
      if (!res) {
        alert('invalid user name and password');
      } else {
        const data = res.body;
        localStorage.setItem('token', JSON.stringify(res.token));
        if (data) {
          localStorage.setItem('user', JSON.stringify(data));
          this.events.publish("user:login", data);
          this.router.navigate(['/']);
        }
      }
    });
  }
  // save() {
  //   console.log(this.model);
  //   const url = environment.apiUrl+ 'user/register';
  //   this.httpp.post(url, this.model).subscribe(result => {
  //     if(result["success"]){
  //       localStorage.setItem("token",result["token"]);
  //       this.router.navigate(["/"]);
  //     }
  //     else alert(result["message"])
  //     console.log(result);
  //   }
  //   );
  // }
}
