import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.page.html',
  styleUrls: ['./add-item.page.scss'],
})

export class AddItemPage implements OnInit {
  model: any = { itemId: null, price: null, };
  router: any;
  items:any[]=[];
  constructor(
    private http: HttpClient,
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
    console.log(this.model);
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'bearer ' + localStorage.getItem('token')
      })
    }
    const url = 'http://localhost:3000/api/items/update';
    this.http.post(url, this.model, httpOptions).subscribe(result => {
      if (result["success"]) this.presentToast(result["message"]);
      console.log(result);
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