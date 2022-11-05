import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { IProperty } from '../models/IProperty';
import { IPropertyBase } from '../models/IPropertybase';
import { Property } from '../models/Property';



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

  newPropID() {
    if (localStorage.getItem('PID')) {
      localStorage.setItem('PID', String(+localStorage.getItem('PID') + 1));
      return +localStorage.getItem('PID');
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }

  addProperty(property : Property){
    localStorage.setItem('newProp',JSON.stringify(property));
  }

}
