import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class Utility {

  public toastTypeArr = {
    DANGER: 'danger',
    WARNING: 'warning',
    SUCCESS: 'success'
  }

  public logOutType = {
    NOACCESSTOKEN: 1,
    BYUSER: 2
  }

  constructor(
    private toastr: ToastrService,
    
    ) { }

  async showToast(message: string, color: string) {
   if(color==this.toastTypeArr.SUCCESS) this.toastr.success('', message);
   else if(color==this.toastTypeArr.WARNING) this.toastr.warning('', message);
   else this.toastr.error('', message);
  }

}
