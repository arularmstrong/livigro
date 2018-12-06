import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import { Router } from '@angular/router';
import  {ApiService} from '../../api.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  public mobile;
  public userDetail;
  display = 'none';

  constructor(private userService:UserService, private apiService:ApiService,private router:Router) { }

  ngOnInit() {
   this.viewdata();
  }

  closeModalDialog(){
    this.display='none';
    this.router.navigate(['/in']); 
   }

  public edit(name,gender,dob,email,city,door,street,postcode)
  {
    this.mobile = this.userService.getMobile();
    this.apiService.editProfile(this.mobile,name,gender,dob,email,city,door,street,postcode).subscribe((data:  any) => {
        this.display='block';
    });
  }

    public viewdata()
    {
      this.mobile = this.userService.getMobile();
      this.apiService.viewProfile(this.mobile).subscribe((data:  any) => {
          this.userDetail = data.data;
      });
}

}