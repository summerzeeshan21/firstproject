import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlHandler } from '../urlHandler/url-handler';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { User } from 'src/app/models/user';
// import { UserTypes } from 'src/app/app.component';
import { AuthGuard } from '../guard/auth-guard';
// import { Features } from 'src/app/shared/service/nav.service';
export enum InventorySearchBy{
    Barcode=1,
    ItemCode=2,
    Product=3
}
@Injectable({
    providedIn: 'root'
})
export class CommonService {
    private notifyLogin = new Subject<any>();
    notifyOnLogin$ = this.notifyLogin.asObservable();
    // user: User = new User();
    public loading: any;
    lang: any = {};
    selectedLanguage: any = { id: 2, title: "English", file: 'en.json', flag: 'usa.PNG' };
    appLang: string;
    constructor(
        private http: HttpClient,
        private urlCtrl: UrlHandler,
        private router: Router,
        private apiService: ApiService,
        private authGuard: AuthGuard

    ) {
        // this.user = this.authGuard.getLoggedInUser();
        this.apiService.notifyOnLogin$.subscribe(resp => {
            console.log("Common Service")
            // this.user = this.authGuard.getLoggedInUser();
        });
        if (localStorage.getItem("selectedLanguage")) {
            this.selectedLanguage = JSON.parse(localStorage.getItem("selectedLanguage"));
        }
        this.appLang = this.selectedLanguage.id == 1 ? "arabic" : "english";
        // this.events.subscribe("onLangSelection",(result)=>{
        //   this.selectedLanguage = JSON.parse(localStorage.getItem("selectedLanguage"));
        //   if(!this.selectedLanguage) this.selectedLanguage = {id:2,title: "English", file: 'en.json',flag:'usa.PNG'};

        //   this.appLang=this.selectedLanguage.id==1?"arabic":"english";
        // });
    }
    notifyWhenLogin(data = {}) {
        this.notifyLogin.next(data);
    }
    getWeekname(datevalue) {
        var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        var d = new Date(datevalue);
        return days[d.getDay()];
    }
    getMonthname(datevalue) {
        var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'];
        var d = new Date(datevalue);
        return month[d.getMonth()];
    }
    getMonthList() {
        let months = [
            { text: 'Jan', value: 1 },
            { text: 'Feb', value: 2 },
            { text: 'Mar', value: 3 },
            { text: 'Apr', value: 4 },
            { text: 'May', value: 5 },
            { text: 'Jun', value: 6 },
            { text: 'Jul', value: 7 },
            { text: 'Aug', value: 8 },
            { text: 'Sep', value: 9 },
            { text: 'Oct', value: 10 },
            { text: 'Nov', value: 11 },
            { text: 'Dec', value: 12 }
        ];
        return months;
    }
    getdateNo(datevalue) {
        var d = new Date(datevalue);
        return d.getDate();
    }
    getFormattedDateDiff(datevalue) {
        var date = new Date(datevalue);
        var year = date.getFullYear();

        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;

        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;

        return year + '-' + month + '-' + day;
    }

    getFormattedDate(datevalue) {
        var date = new Date(datevalue);
        var year = date.getFullYear();

        var month = (1 + date.getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;

        var day = date.getDate().toString();
        day = day.length > 1 ? day : '0' + day;

        return day + '-' + month + '-' + year;
    }
    getYears(last = 5) {
        let year = new Date().getFullYear();
        let years = [];
        let startFrom = year - last;
        for (let index = startFrom; index <= year; index++) {
            years.push(index);
        }
        return years;
    }
    getFormattedDateEnglish(datevalue) {
        var days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'Sep', 'Oct', 'Nov', 'Dec'];
        var date = new Date(datevalue);
        var year = date.getFullYear();
        return date.getDate() + ' ' + months[date.getMonth()] + ' ' + year;
    }
getTime(datevalue) {
        var hours = new Date().getHours();
        var hours = (hours + 24 - 2) % 24;
        var mid = 'am';
        if (hours == 0) { //At 00 hours we need to show 12 am
            hours = 12;
        }
        else if (hours > 12) {
            hours = hours % 12;
            mid = 'pm';
        }
        return hours + mid;
    }


    convertCurrentTimeToUTC(_date) {
        var date = new Date(_date);
        return new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    }

    convertTimestamp(timestamp) {
        var month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
            yyyy = d.getFullYear(), mm = ('0' + (d.getMonth() + 1)).slice(-2), // Months are zero based. Add leading 0.
            dd = ('0' + d.getDate()).slice(-2), // Add leading 0.
            hh = d.getHours(), h = hh, min = ('0' + d.getMinutes()).slice(-2), // Add leading 0.
            ampm = 'AM', time;
        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        }
        else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        }
        else if (hh == 0) {
            h = 12;
        }
        // ie: 2013-02-18, 8:35 AM  
        time = h + ':' + min + ' ' + ampm;
        return time;
    }
    convertdatetimestamp(timestamp) {
        var month_names_short = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
            yyyy = d.getFullYear(), mm = ('0' + (d.getMonth() + 1)).slice(-2), // Months are zero based. Add leading 0.
            dd = ('0' + d.getDate()).slice(-2), // Add leading 0.
            hh = d.getHours(), h = hh, min = ('0' + d.getMinutes()).slice(-2), // Add leading 0.
            ampm = 'AM', time;
        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        }
        else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        }
        else if (hh == 0) {
            h = 12;
        }
        // ie: 2013-02-18, 8:35 AM  
        time = dd + ' ' + month_names_short[parseInt(mm) - 1] + ' ' + yyyy;
        return time;
    }
    checkFileType(name, item: any = {}) {
        var splitName = name.split(".");
        if (/(txt)$/.test(splitName[splitName.length - 1])) {
            item.txt = true;
        }
        else if (/(xlsx|csv)$/.test(splitName[splitName.length - 1])) {
            item.xlsx = true;
        }
        else if (/(json)$/.test(splitName[splitName.length - 1])) {
            item.json = true;
        }
        else if (/(exe)$/.test(splitName[splitName.length - 1])) {
            item.exe = true;
        }
        else if (/(zip)$/.test(splitName[splitName.length - 1])) {
            item.zip = true;
        }
        else if (/(docx|doc)$/.test(splitName[splitName.length - 1])) {
            item.docx = true;
        }
        else if (/(pdf)$/.test(splitName[splitName.length - 1])) {
            item.pdf = true;
        }
        else if (/(jpg|gif|png|JPG|GIF|PNG|JPEG|jpeg)$/.test(splitName[splitName.length - 1])) {
            item.image = true;
        }
        else if (/(mp4|wmv|avi|MP4|WMV|AVI|AVCHD|avchd|FLV|flv|F4V|f4v|SWF|MKV|WEBM|MPEG-2)$/.test(splitName[splitName.length - 1])) {
            item.video = true;
        }
        else {
            item.file = true;
        }
        return item;
    }
    // getUserTypeText(userType) {
    //     if (userType == UserTypes.SuperAdmin) return "Super Admin";
    //     else if (userType == UserTypes.ClientAdmin) return "Admin";
    //     else if (userType == UserTypes.BranchAdmin) return "Branch Admin";
    //     else if (userType == UserTypes.Standard) return "Standard";
    //     else return "";
    // }
    // checkFeatureAllowed(feature:Features){
    //     let featuresList = this.authGuard.getFeatures();
    //     let allowed = featuresList.find(x => x.id == feature);
    //     if(allowed) return true;
    //     else return false;
    // }
    checkULR(text) {
        if (new RegExp("([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?").test(text)) {
          return true;
        }
      }
}
