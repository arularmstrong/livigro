import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
API_URL  =  window.location.origin;

constructor(private  http:  HttpClient) { }

getPackages(){
    return  this.http.get(`${this.API_URL}/api/package/listpackages`);
}

createPackage(data){
  return  this.http.post(`${this.API_URL}/package/`,data);
}
}


