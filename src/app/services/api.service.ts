import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

//booking

bookPackage(userId : string, packageId: string, name: string, mobile: string, address: string ) {
  return this.http.post('window.location.origin/api/booking/bookpackage', {userId : userId, packageId: packageId, name: name, mobile: mobile, address: address });        
}

//lab

addLab(name : string, location: string) {
  return this.http.post('window.location.origin/api/lab/addlab', { name: name, location: location });        
}

//package

addPackage(packageName:string,tests: string,labId: string,fasting:number,price: number,discount: number) {
  return this.http.post('window.location.origin/api/package/addpackage', { packageName:packageName,tests: tests,labId: labId,fasting:fasting,price: price,discount: discount });        
}

  listPackages() {
return this.http.get('window.location.origin/api/package/listpackages');        
}

  searchPackages(term : string) {
return this.http.get('window.location.origin/api/package/searchpackages');        
}

  addTest(testName:string,parameters: string,labId: string,fasting:number,price: number,discount: number) {
return this.http.post('window.location.origin/api/package/addtest', { testName:testName,parameters: parameters,labId: labId,fasting:fasting,price: price,discount: discount });        
}

  getTests() {
return this.http.get('window.location.origin/api/package/gettests');        
}

//user

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
