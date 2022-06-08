import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  dasboardInfo={};
  constructor(
    private router:Router
  ) { }

  ngOnInit() {
  }
  logout(){
    this.router.navigate(["/login"]);
    console.log("login")
    
  }

}