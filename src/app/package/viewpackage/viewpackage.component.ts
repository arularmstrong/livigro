import { Component, OnInit } from '@angular/core';
import {PackageService} from '../package.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-viewpackage',
  templateUrl: './viewpackage.component.html',
  styleUrls: ['./viewpackage.component.scss']
})
export class ViewpackageComponent implements OnInit {

  public packageInfo;
  constructor(private packageService: PackageService, private router: Router ) { }

  ngOnInit() {
   this.packageInfo=this.packageService.getPackageInfo();
  }

  public bookPackage(data){
    this.packageService.setPackageInfo(data);
    this.router.navigate(['/payment']);
  }

}
