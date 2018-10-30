import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http: HttpClient) { }

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



}
