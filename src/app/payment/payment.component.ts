import { Component, OnInit } from '@angular/core';
import { WindowRefService } from './window-ref.service';
import {PackageService} from '../package/package.service';
import {UserService} from '../user/user.service';
import  {ApiService} from '../api.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  public packageBook;
  public options;
  public UserId;
  
  constructor( private winRef: WindowRefService ,   private apiService:ApiService, private packageService: PackageService,private userService:UserService ) { }

  ngOnInit() { 

    this.packageBook=this.packageService.getPackageInfo();


   }

  rzp1:any;
 
  public initPay(data,name,mobile,address):void {
    this.packageService.setPackageInfo(data);
    this.packageBook=this.packageService.getPackageInfo();
    this.UserId=this.userService.getUserId();
    
    localStorage.setItem('UserId', JSON.stringify(this.UserId));
    localStorage.setItem('packageId', JSON.stringify(this.packageBook.packageId));
    localStorage.setItem('name', JSON.stringify(name));
    localStorage.setItem('mobile', JSON.stringify(mobile));
    localStorage.setItem('address', JSON.stringify(address));
    localStorage.setItem('paymentpop', JSON.stringify('popdisplaydataforpayment'));
    this.options = {
      "key": "rzp_live_ELHwdvE8q1GRxE",
      "amount": this.packageBook.price * 100,  
      "name": this.packageBook.packageName,
      "description": "Buy Livigro Package",
      "image": "assets/images/Livigro-Logo.jpg",
      "handler": function (response){
          if (typeof response.razorpay_payment_id == 'undefined' ||  response.razorpay_payment_id < 1) {
            location.href = '/payment';
          } else {
            location.href = '/';
          }

      },
    "modal": {
        "ondismiss": function(){
      localStorage.setItem('UserId', JSON.stringify(''));
      localStorage.setItem('packageId', JSON.stringify(''));
      localStorage.setItem('name', JSON.stringify(''));
      localStorage.setItem('mobile', JSON.stringify(''));
      localStorage.setItem('address', JSON.stringify(''));
      localStorage.setItem('paymentpop', JSON.stringify(''));
        }
    },
      "prefill": {
          "name": name,
      },
      "theme": {
          "color": "#dd3f7e"
      }
  };

    this.rzp1 = new this.winRef.nativeWindow.Razorpay(this.options);
    this.rzp1.open();
  
 }
}
