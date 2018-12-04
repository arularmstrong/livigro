import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import  {ApiService} from '../../api.service';
import {UserService} from '../user.service';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  currentRate: any;
  public typeaheadBasicModel: any;
  public typeaheadFocusModel: any;

  constructor(private userService:UserService, private apiService:ApiService,private router:Router) { }


  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();



  ngOnInit() {

  }
public verifyOTP(otp){
  this.apiService.verifyOTP(otp,this.userService.getMobile()).subscribe((data:  any) => {
    if( data.status == 'success')
    {
    this.router.navigate(['/password']);
    }
});
}
}
