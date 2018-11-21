import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor() { }
  private packageInfo;
  private packageList;
  public setPackageInfo(data)
  {
    this.packageInfo=data;
  }
  public getPackageInfo(){
    return this.packageInfo;
  }
  public setPackageList(data)
  {
    this.packageList=data;
  }
  public getPackageList(){
    return this.packageList;
  }
}