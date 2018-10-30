import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  bookPackage(userId : string, packageId: string, name: string, mobile: string, address: string ) {
    return this.http.post('window.location.origin/api/booking/bookpackage', {userId : userId, packageId: packageId, name: name, mobile: mobile, address: address });        
}

}
