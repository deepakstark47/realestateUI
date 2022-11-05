import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { IPropertyBase } from '../models/IPropertybase';



@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private httpClient:HttpClient) { }
 getAllProperties(SellRent:number):Observable<IPropertyBase[]>{
 return  this.httpClient.get('assets/properties.json').pipe(map(data=>{
  const propertiesArray:Array<IPropertyBase>=[];
  for(const id in data){
    if(data.hasOwnProperty(id) && data[id].SellRent===SellRent ){
    propertiesArray.push(data[id]);
    }
  }
  return propertiesArray;
}))
 }

}
