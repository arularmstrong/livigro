import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ApiService } from  '../api.service';
import { Router } from '@angular/router';
import {PackageService} from '../package/package.service';
import {UserService} from '../user/user.service';
declare var $: any;

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
  public  packages;
  public loading = false;
  userData: any[] = ["1000","1001","1002","1003","1004","1005","1006","1007","1008","1009","1010"];
  userList1: any;
  userList2: any;

  lastkeydown1: number = 0;
  lastkeydown2: number = 0;
  subscription: any;
  

  constructor(private apiService:ApiService,private router: Router,private packageService: PackageService,private userService:UserService) { }

  ngOnInit() {



    $('#staticUserIdsSecondWay1').autocomplete({
      source: ["Body Check", "Urine Test", "Full Checkup","Blood Test","Health Checkup","Pressure Checkup","Check"]
    });
    $('#staticUserIdsSecondWay2').autocomplete({
      source: ["Body Check", "Urine Test", "Full Checkup","Blood Test","Health Checkup","Pressure Checkup","Check"]
    });
    $('#staticUserIdsSecondWay3').autocomplete({
      source: ["Body Check", "Urine Test", "Full Checkup","Blood Test","Health Checkup","Pressure Checkup","Check"]
    });

    this.listPackages();

    



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
            $(".go-icon").addClass("go-in");
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
   if(this.paymentName != '' && this.paymentMobile != '' && this.paymentAddress != '' && this.paymentUserId != '' && this.paymentpackageId != '' && this.paymentPop == 'popdisplaydataforpayment')
   {
    this.apiService.bookPackage(this.paymentUserId,this.paymentpackageId,this.paymentName,this.paymentMobile,this.paymentAddress).subscribe((data:  any) => {
      localStorage.setItem('UserId', JSON.stringify(''));
      localStorage.setItem('packageId', JSON.stringify(''));
      localStorage.setItem('name', JSON.stringify(''));
      localStorage.setItem('mobile', JSON.stringify(''));
      localStorage.setItem('address', JSON.stringify(''));
      localStorage.setItem('paymentpop', JSON.stringify(''));
      localStorage.clear();
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
    localStorage.clear(); 
   }

  public search(term){
    this.apiService.searchPackage(term).subscribe((data:  any) => {
      this.packageService.setPackageList(data.data);
       this.router.navigate(['/search']);
  });
  }

  public  listPackages(){
    this.loading = true;
    this.apiService.getTopPackages().subscribe((data:  any) => {
        this.loading = false;
        this.packages  =  data.data;
    });
  }
  public viewPackage(data){
    this.packageService.setPackageInfo(data);
    this.router.navigate(['/viewpackage']);
  }

  getUserIdsFirstWay($event) {
    let userId = (<HTMLInputElement>document.getElementById('userIdFirstWay')).value;
    this.userList1 = [];

    if (userId.length > 2) {
      if ($event.timeStamp - this.lastkeydown1 > 200) {
        this.userList1 = this.searchFromArray(this.userData, userId);
      }
    }
  }

  getUserIdsSecondtWay($event) {
    
    let userId = (<HTMLInputElement>document.getElementById('dynamicUserIdsSecondWay')).value;

    this.userList2 = [];

    if (userId.length > 2) {
      if ($event.timeStamp - this.lastkeydown2 > 200) {
        this.userList2 = this.searchFromArray(this.userData, userId);

        $('#dynamicUserIdsSecondWay').autocomplete({
          source: this.userList2,
          messages: {
            noResults: '',
            results: function () { }
          }
        });
      }
    }
  }

  searchFromArray(arr, regex) {
    let matches = [], i;
    for (i = 0; i < arr.length; i++) {
      if (arr[i].match(regex)) {
        matches.push(arr[i]);
      }
    }
    return matches;
  };

}