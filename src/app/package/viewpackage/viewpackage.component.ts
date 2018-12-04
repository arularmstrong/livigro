import { Component, OnInit } from '@angular/core';
import {PackageService} from '../package.service';

import { Router } from '@angular/router';
import {UserService} from '../../user/user.service';

@Component({
  selector: 'app-viewpackage',
  templateUrl: './viewpackage.component.html',
  styleUrls: ['./viewpackage.component.scss']
})
export class ViewpackageComponent implements OnInit {

  public packageInfo;
  public mobile;
  public isLogged;

  constructor(private packageService: PackageService, private router: Router , private userService:UserService ) { }

  ngOnInit() {
   this.packageInfo=this.packageService.getPackageInfo();
  }

  public bookPackage(data){
    this.mobile=this.userService.getMobile();
    if(this.userService.getUserId()){
      this.isLogged=true;
    }
    else this.isLogged=false;


    if(this.isLogged)
    {
      this.packageService.setPackageInfo(data);
      this.router.navigate(['/payment']);
    }
    else
   {
    this.router.navigate(['/login']);
   }

  }

}
