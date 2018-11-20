import { Component, OnInit } from '@angular/core';
import {PackageService} from '../package.service';

@Component({
  selector: 'app-viewpackage',
  templateUrl: './viewpackage.component.html',
  styleUrls: ['./viewpackage.component.scss']
})
export class ViewpackageComponent implements OnInit {

  public packageInfo;
  constructor(private packageService: PackageService ) { }

  ngOnInit() {
   this.packageInfo=this.packageService.getPackageInfo();
  }

}
