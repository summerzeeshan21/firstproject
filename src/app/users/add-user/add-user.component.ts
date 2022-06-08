import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {

  constructor(
    private router:Router,
  ) { }

  ngOnInit() {}
  back(){
    console.log("back");
    this.router.navigate(['/users'])
  }

}
