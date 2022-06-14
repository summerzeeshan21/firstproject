import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.page.html',
  styleUrls: ['./add-stock.page.scss'],
})
export class AddStockPage implements OnInit {
  items: any[] = [
  ];
  model: any = {  itemId: null ,quantity: null, date: null, price: null };
 
  constructor(
    private httpp: HttpClient,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    this.getItem();
  }
  getItem(){
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'bearer ' + localStorage.getItem('token')
      })
    }
    const url = 'http://localhost:3000/api/items/getItems';
    this.httpp.get(url, httpOptions).subscribe((result:any) => {
      this.items=result.body;
      console.log(result);
    });
  }
  save() {
    console.log(this.model);
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'bearer ' + localStorage.getItem('token')
      })
    }
    let url = "http://localhost:3000/api/items/addStock";
    this.httpp.post(url, this.model, httpOptions).subscribe(result => {
     this.presentToast(result["message"]);
    })
  }
  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      header: msg,
      position: 'bottom',
      duration: 2000
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
   getPrice(){
     this.model.price=this.items.find(x=>x._id==this.model.itemId).price;
   }
}