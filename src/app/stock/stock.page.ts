import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage implements OnInit {
  model: any = { startDate: null, endDate: null,}
  item: any;
  items: any[] = [];
  totalPetrol: number = 0;
  totalDiesel: number = 0;
  totalPrice: number = 0;
  dieselTotalPrice: number = 0;
  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
  ) {
    let date = new Date();
    this.model.startDate = this.datePipe.transform(date, "yyyy-MM-dd");
    this.model.endDate = this.datePipe.transform(date, "yyyy-MM-dd");
  }
  ngOnInit() {
    this.getStockReport();
  }
  getStockReport() {
    console.log(this.model)
    this.totalPetrol = 0;
    this.totalDiesel = 0;
    this.totalPrice = 0;
    this. dieselTotalPrice = 0;
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'bearer ' + localStorage.getItem('token')
      })
    }
    const url = environment.apiUrl+ `items/getStockReport?startDate=${this.datePipe.transform(this.model.startDate, "MM/dd/yyyy")}&endDate=${this.model.endDate}`;
    this.http.get(url, httpOptions).subscribe((result: any) => {
      this.items = result.body;
      this.items.forEach(element => {
        if (element.item.name == "Petrol") this.totalPetrol += element.quantity;
        if (element.item.name == "Diesel") this.totalDiesel += element.quantity;
        if (element.item.name == "Petrol") this.totalPrice += element.price*element.quantity;
        if (element.item.name == "Diesel") this.dieselTotalPrice += element.price*element.quantity;
      });
      console.log(result);
    });
  }
  Refresh(event) {
    this. getStockReport();
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    }
  } 






