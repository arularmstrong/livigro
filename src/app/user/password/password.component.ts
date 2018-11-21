import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import  {ApiService} from '../../api.service';
import {UserService} from '../user.service';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  currentRate: any;
  public typeaheadBasicModel: any;
  public typeaheadFocusModel: any;

  constructor(private userService:UserService, private apiService:ApiService,private router:Router) { }


  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();



  ngOnInit() {

  }
  public registerUser(password){
    this.apiService.registerUser(password,this.userService.getMobile()).subscribe((data:  any) => {
       this.router.navigate(['/registered']);
  });
  }
}
