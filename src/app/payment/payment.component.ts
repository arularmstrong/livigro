import { Component, OnInit } from '@angular/core';
import { WindowRefService } from './window-ref.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor( private winRef: WindowRefService ) { }
  rzp1:any;
 
  public options = {
    "key": "rzp_live_ELHwdvE8q1GRxE",
    "amount": "2000", 
    "name": "Livigro",
    "description": "Buy Livigro Package",
    "image": "assets/images/Livigro-Logo.jpg",
    "handler": function (response){
        alert(response.razorpay_payment_id);
    },
    "theme": {
        "color": "#dd3f7e"
    }
};


  public initPay():void {
    this.rzp1 = new this.winRef.nativeWindow.Razorpay(this.options);
    this.rzp1.open();
 }

  ngOnInit() {  }
  

}
