import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs/Subject';
import {PackageService} from '../package/package.service';
import { ApiService } from  '../api.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public term:string;
  currentRate: any;
  public typeaheadBasicModel: any;
  public typeaheadFocusModel: any;
  public packageList:any;
  public  packages;
  public loading = false;
  constructor(private packageService: PackageService,private apiService:ApiService,private router: Router,private spinner: NgxSpinnerService) { }



  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();


  ngOnInit() {
    this.packageList = this.packageService.getPackageList();
    this.currentRate = 8;
    this.listPackages();

    /** spinner starts on init */
    this.spinner.show();
 
    setTimeout(() => {
        /** spinner ends after 1 second */
        this.spinner.hide();
    }, 1000);

  }

  public  listPackages(){
    this.loading = true;
    this.apiService.getPackages().subscribe((data:  any) => {
        this.loading = false;
        this.packages  =  data.data;
    });
  }



  public search(term){
    this.apiService.searchPackage(term).subscribe((data:  any) => {
      this.packageService.setPackageList(data.data);
       this.router.navigate(['/search']);
  });
  }

  public viewPackage(data){
    this.packageService.setPackageInfo(data);
    this.router.navigate(['/viewpackage']);
  }

 
}
