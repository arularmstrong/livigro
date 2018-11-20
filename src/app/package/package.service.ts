import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor() { }
  private packageInfo;
  public setPackageInfo(data)
  {
    this.packageInfo=data;
  }
  public getPackageInfo(){
    return this.packageInfo;
  }

}