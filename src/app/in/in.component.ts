import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ApiService } from  '../api.service';
import { Router } from '@angular/router';
import {PackageService} from '../package/package.service';
import * as $ from 'jquery';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-in',
  templateUrl: './in.component.html',
  styleUrls: ['../app.component.scss','./in.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InComponent implements OnInit {
  public term:string;
  public paymentUserId:String;
  public paymentpackageId:String;
  public paymentName:String;
  public paymentMobile:String;
  public paymentAddress:String;

  display='none';

  constructor(private apiService:ApiService,private router: Router,private packageService: PackageService,private userService:UserService) { }

  ngOnInit() {
    this.paymentUserId = JSON.parse(localStorage.getItem('name'));
    this.paymentpackageId = JSON.parse(localStorage.getItem('mobile'));
    this.paymentName = JSON.parse(localStorage.getItem('name'));
    this.paymentMobile = JSON.parse(localStorage.getItem('mobile'));
    this.paymentAddress = JSON.parse(localStorage.getItem('address'));
   if(this.paymentName != '' && this.paymentMobile != '' && this.paymentAddress != '' && this.paymentUserId != '' && this.paymentpackageId != '')
   {
    this.apiService.bookPackage(this.paymentUserId,this.paymentpackageId,this.paymentName,this.paymentMobile,this.paymentAddress).subscribe((data:  any) => {
      localStorage.setItem('UserId', JSON.stringify(''));
      localStorage.setItem('packageId', JSON.stringify(''));
      localStorage.setItem('name', JSON.stringify(''));
      localStorage.setItem('mobile', JSON.stringify(''));
      localStorage.setItem('address', JSON.stringify(''));
      this.display='block';
    });
   }
   else
  {
   // console.log("no payment set");
  }
  }

  closeModalDialog(){
    this.display='none'; 
   }

  public search(term){
    this.apiService.searchPackage(term).subscribe((data:  any) => {
      this.packageService.setPackageList(data.data);
       this.router.navigate(['/search']);
  });
  }

}
