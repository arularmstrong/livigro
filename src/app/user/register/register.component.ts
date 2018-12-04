import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';
import  {ApiService} from '../../api.service';
import {UserService} from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  currentRate: any;
  public typeaheadBasicModel: any;
  public typeaheadFocusModel: any;

  display='none';

  constructor(private userService:UserService, private apiService:ApiService,private router:Router) { }


  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();



  ngOnInit() {

  }

  closeModalDialog(){
    this.display='none'; 
   }

public register(mobile){
  this.userService.setMobile(mobile);
  this.apiService.register(mobile).subscribe((data:  any) => {
    if( data.status == 'success')
    {
     this.router.navigate(['/otp']);
    }
    else
    {
      this.display='block';
    }
});
}

}
