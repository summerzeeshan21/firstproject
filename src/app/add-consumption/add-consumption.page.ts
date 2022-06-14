import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-consumption',
  templateUrl: './add-consumption.page.html',
  styleUrls: ['./add-consumption.page.scss'],
})
export class AddConsumptionPage implements OnInit {
  items: any[] = [
  ];
  model: any = { itemId: null,  date: null, quantity: null, price: null };
  constructor
    (private http: HttpClient,
      private toastCtrl: ToastController
      ) { }

  ngOnInit() {
    this.getItems();
  }
  getItems() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'bearer ' + localStorage.getItem('token')
      })
    }
    const url = 'http://localhost:3000/api/items/getItems';
    this.http.get(url, httpOptions).subscribe((result:any) => {
      this.items=result.body;
      console.log(result);
    });

  }
  save() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'bearer ' + localStorage.getItem('token')
      })
    }
    const url = 'http://localhost:3000/api/items/addConsumption';
    this.http.post(url, this.model, httpOptions).subscribe(result => {
      this.presentToast(result["message"]);
    });
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
