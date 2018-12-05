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
  public paymentPop:String;

  display='none';

  constructor(private apiService:ApiService,private router: Router,private packageService: PackageService,private userService:UserService) { }

  ngOnInit() {

    $(document).ready(function(){
      $("#search").focus(function() {
        $(".search-box").addClass("border-searching");
        $(".search-icon").addClass("si-rotate");
      });
      $("#search").blur(function() {
        $(".search-box").removeClass("border-searching");
        $(".search-icon").removeClass("si-rotate");
      });
      $("#search").keyup(function() {
          if($(this).val().length > 0) {
            $(".go-icon").addClass("go-in");
          }
          else {
            $(".go-icon").removeClass("go-in");
          }
      });
      $(".go-icon").click(function(){
        $(".search-form").submit();
      });
  });




    this.paymentUserId = JSON.parse(localStorage.getItem('UserId'));
    this.paymentpackageId = JSON.parse(localStorage.getItem('packageId'));
    this.paymentName = JSON.parse(localStorage.getItem('name'));
    this.paymentMobile = JSON.parse(localStorage.getItem('mobile'));
    this.paymentAddress = JSON.parse(localStorage.getItem('address'));
    this.paymentPop = JSON.parse(localStorage.getItem('paymentpop'));
   if(this.paymentName != '' && this.paymentMobile != '' && this.paymentAddress != '' && this.paymentUserId != '' && this.paymentpackageId != '')
   {
    this.apiService.bookPackage(this.paymentUserId,this.paymentpackageId,this.paymentName,this.paymentMobile,this.paymentAddress).subscribe((data:  any) => {
      localStorage.setItem('UserId', JSON.stringify(''));
      localStorage.setItem('packageId', JSON.stringify(''));
      localStorage.setItem('name', JSON.stringify(''));
      localStorage.setItem('mobile', JSON.stringify(''));
      localStorage.setItem('address', JSON.stringify(''));
      if(this.paymentPop == 'popdisplaydataforpayment')
      {
      this.display='block';
      }
    });
   }
   else
  {
   // console.log("no payment set");
  }
  }

  closeModalDialog(){
    this.display='none';
    localStorage.clear(); 
   }

  public search(term){
    this.apiService.searchPackage(term).subscribe((data:  any) => {
      this.packageService.setPackageList(data.data);
       this.router.navigate(['/search']);
  });
  }

}
