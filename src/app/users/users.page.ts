import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users:any[]=[];

  constructor(private http:HttpClient,
    private alertController:AlertController) { }

  ngOnInit() {
    this.getAssistantUsers();
  }
  getAssistantUsers() {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'bearer ' + localStorage.getItem('token')
      })
    }
    const url = 'http://localhost:3000/api/user/getAssistantUsers';
    this.http.get(url, httpOptions).subscribe((result:any) => {
      this.users=result.body;
      console.log(result);
    });
  }
  async presentAlert(id,index) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm',
      message: 'Are you sure delete this user?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          id: 'confirm-button',
          handler: () => {
            this.deleteAssistantUsers(id,index);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  deleteAssistantUsers(id,index) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'bearer ' + localStorage.getItem('token')
      })
    }
    const url = 'http://localhost:3000/api/user/deleteAssistantUsers?id='+id;
    this.http.delete(url, httpOptions).subscribe((result:any) => {
      this.users.splice(index,1);
    });
  }
  Refresh(event) {
    this. getAssistantUsers();
      setTimeout(() => {
        console.log('Async operation has ended');
        event.target.complete();
      }, 2000);
    }
}
