import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../../api.service';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  public packages;
  public loading = false;
  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
    this.listTopPackages();
}
public  listTopPackages(){
  this.loading=true;
  this.apiService.getTopPackages().subscribe((data:  any) => {
      this.loading=false;
      this.packages  =  data.data;
      
  });
}

}
