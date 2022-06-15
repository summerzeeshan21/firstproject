import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  items: any[] = [
  ];
  model : any = {  name :null , phone:null, password: null, stock: null, };
  id:string;
  constructor(
    private router:Router,
    private http :HttpClient,
    private activatedRoute:ActivatedRoute,
    private toastCtrl: ToastController
      ) { 
     this.id=this.activatedRoute.snapshot.params["id"];
    if(this.id) this.getUserById(this.id);
  }

  ngOnInit() {}
  back(){
    console.log("back");
    this.router.navigate(['/users'])
  }
  getUserById(id) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'bearer ' + localStorage.getItem('token')
      })
    }
    const url = environment.apiUrl+ 'user/getUserById?id='+id;
    this.http.get(url, httpOptions).subscribe((result:any) => {
      this.model=result.body;
      
    });
  }
  submit() {
    console.log(this.model);
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'bearer ' + localStorage.getItem('token')
      })
    }
    let url = environment.apiUrl+ "user/addUser";
    if(this.id){
      url = environment.apiUrl+ "user/updateUsers"; 
      this.model["id"]=this.id;
    }
    this.http.post(url, this.model, httpOptions).subscribe(result => {
      this.presentToast(result["message"]);
      this.router.navigate(["/users"])
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
