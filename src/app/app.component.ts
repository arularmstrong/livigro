import { Component, OnInit} from '@angular/core';
import { ApiService } from  './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  packages;
  constructor(private apiService: ApiService){}
  ngOnInit(){
    this.listPackages();
  }
  public listPackages(){
    this.apiService.getPackages().subscribe((data:  any) => {
      this.packages  =  data.data;
      
  });
  }
  title = 'livigro';
}



