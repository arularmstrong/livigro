import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../../api.service';
import {PackageService} from '../package.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-listpackage',
  templateUrl: './listpackage.component.html',
  styleUrls: ['./listpackage.component.scss']
})
export class PackageComponent implements OnInit {

  public  packages;
  public loading = false;
  constructor(private  apiService:  ApiService, private router: Router, private packageService : PackageService) { }

  ngOnInit() {
    this.listPackages();
}

public  listPackages(){
  this.loading = true;
  this.apiService.getPackages().subscribe((data:  any) => {
      this.loading = false;
      this.packages  =  data.data;
  });
}
public viewPackage(data){
  this.packageService.setPackageInfo(data);
  this.router.navigate(['/viewpackage']);
}

  

}
