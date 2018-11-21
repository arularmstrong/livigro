import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/filter';
import { Router } from '@angular/router';
import  {ApiService} from '../../api.service';
import {UserService} from '../user.service';


@Component({
  selector: 'app-forms',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  currentRate: any;
  public typeaheadBasicModel: any;
  public typeaheadFocusModel: any;

  constructor(private userService:UserService, private apiService:ApiService,private router:Router) { }



  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();



  ngOnInit() {

  }
public login(mobile,password){
  this.userService.setMobile(mobile);
  this.apiService.login(password,mobile).subscribe((data:  any) => {
    this.userService.setUserId(data.data.userId);
    console.log(data.data.userId);
    this.router.navigate(['/in']);
});
}
}
