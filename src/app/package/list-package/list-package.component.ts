import { Component, OnInit } from '@angular/core';
import { ApiService } from  '../../api.service';
@Component({
  selector: 'app-list-package',
  templateUrl: './list-package.component.html',
  styleUrls: ['./list-package.component.scss']
})
export class ListPackageComponent implements OnInit {

 
  public  packages;
  constructor(private  apiService:  ApiService) { }

  ngOnInit() {
    this.listPackages();
}
public  listPackages(){
  this.apiService.getPackages().subscribe((data:  any) => {
      this.packages  =  data.data;
      console.log(data.data);
  });
}


}

