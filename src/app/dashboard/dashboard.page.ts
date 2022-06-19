import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  petrol: number = 0;
  diesel: number = 0;
  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }
  ngOnInit() {
    this.getTotalStock();
  }
  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    this.router.navigate(["/login"]);
  }
  getTotalStock() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'bearer ' + localStorage.getItem('token')
      })
    }
    let url = environment.apiUrl+ 'items/getTotalStock';
    this.http.get(url, httpOptions).subscribe((result: any) => {
      console.log(result);
      result.stock.forEach(item => {
        let consump = result.consumption.find(x => x._id == item._id);
        let total = 0
        if (consump) {
          total = item.total - consump.total;
        }
        if (item.item.name == "Petrol") {
          this.petrol = total;
        }
        else this.diesel = total;
      });
    })
  }
Refresh(event){
  this.getTotalStock();
  setTimeout(()=>{
    console.log('Async operation hase ended');
    event.target.complete();
  },2000);

}

}