import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(mobile : string, password: string) {
    return this.http.post('window.location.origin/api/user/login', { mobile: mobile, password: password });        
}

  register(mobile : string ) {
  return this.http.post('window.location.origin/api/user/register', { mobile: mobile});        
}
 
  verifyOtp(id : string, otp: number) {
  return this.http.post('window.location.origin/api/user/verifyotp', { id: id, otp: otp });        
}

  registerVerifiedUser(id : string, password: string) {
  return this.http.post('window.location.origin/api/user/registeruser', { id: id, password: password });       
}

  resendOtp(id : string) {
  return this.http.get('window.location.origin/api/user/resendotp' + id );        
}

}
