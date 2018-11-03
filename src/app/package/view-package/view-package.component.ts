import { Component, OnInit } from '@angular/core';
import {PackageService} from '../package.service';
@Component({
  selector: 'app-view-package',
  templateUrl: './view-package.component.html',
  styleUrls: ['./view-package.component.scss']
})
export class ViewPackageComponent implements OnInit {
  
 public packageInfo;
  constructor(private packageService: PackageService ) { }

  ngOnInit() {
   this.packageInfo=this.packageService.getPackageInfo();
  }
  
}
