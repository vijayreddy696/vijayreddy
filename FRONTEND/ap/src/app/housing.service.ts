import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(public http:HttpClient) { }
get_properties(){
  return this.http.get('assets/properties.json')
}

}
