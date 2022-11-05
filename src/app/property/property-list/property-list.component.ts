import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/models/IPropertybase';
import { HousingService } from 'src/app/services/housing.service';


@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent:number=1;
  Properties: Array<IPropertyBase>;
  constructor(private housingService:HousingService,private router :ActivatedRoute) { }

  ngOnInit(): void {
    if(this.router.snapshot.url.toString()){
      this.SellRent=2;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(data=>{
      this.Properties=data;
      const newProperty = JSON.parse(localStorage.getItem('newProp'));

      if(newProperty.SellRent === this.SellRent){
        this.Properties = [newProperty,...this.Properties];
      }
      console.log(data)},error=>{
        console.log(error);
      })
  }

}
