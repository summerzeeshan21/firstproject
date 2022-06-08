import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http: HttpClient
  ) { }
  post(url,model) {
    this.http.post(url,model).subscribe(result=>{
      console.log(result);
    });
  }
}
