import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LabService {

  constructor(private http: HttpClient) { }

  addLab(name : string, location: string) {
    return this.http.post('window.location.origin/api/lab/addlab', { name: name, location: location });        
}

}
