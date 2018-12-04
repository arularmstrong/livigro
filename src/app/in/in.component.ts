import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { ApiService } from  '../api.service';
import { Router } from '@angular/router';
import {PackageService} from '../package/package.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-in',
  templateUrl: './in.component.html',
  styleUrls: ['../app.component.scss','./in.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InComponent implements OnInit {
  public term:string;
  constructor(private apiService:ApiService,private router: Router,private packageService: PackageService) { }

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
  }

  public search(term){
    this.apiService.searchPackage(term).subscribe((data:  any) => {
      this.packageService.setPackageList(data.data);
       this.router.navigate(['/search']);
  });
  }

}
