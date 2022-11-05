import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { IPropertyBase } from 'src/app/models/IPropertybase';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  @Input() Property: IPropertyBase;
  @Input() hideIcons:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
