import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  model: any= {pump: null, city: null }

  constructor( 
    private http: HttpClient
    ) { 
   
  }

  ngOnInit() {

  }
  save() {
    console.log(this.model);
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'bearer ' + localStorage.getItem('token')
      })
    }
    const url = 'http://localhost:3000/api/items/addSetting';
    this.http.post(url, this.model, httpOptions).subscribe(result => {
    alert(['message']);
    console.log(result)
    });
  }

}
