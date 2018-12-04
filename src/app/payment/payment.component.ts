import { Component, OnInit } from '@angular/core';
import { WindowRefService } from './window-ref.service';
import {PackageService} from '../package/package.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  public packageBook;
  public options;

  constructor( private winRef: WindowRefService , private packageService: PackageService ) { }

  ngOnInit() { 

    this.packageBook=this.packageService.getPackageInfo();



   }

  rzp1:any;
 
  public initPay(data):void {
    this.packageService.setPackageInfo(data);
    this.packageBook=this.packageService.getPackageInfo();
    
    this.options = {
      "key": "rzp_live_ELHwdvE8q1GRxE",
      "amount": this.packageBook.price * 100, 
      "name": this.packageBook.packageName,
      "description": "Buy Livigro Package",
      "image": "assets/images/Livigro-Logo.jpg",
      "handler": function (response){
          alert(response.razorpay_payment_id);
      },
      "theme": {
          "color": "#dd3f7e"
      }
  };

    this.rzp1 = new this.winRef.nativeWindow.Razorpay(this.options);
    this.rzp1.open();
 }

  
  

}
