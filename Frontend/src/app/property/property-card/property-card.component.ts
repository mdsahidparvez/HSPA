import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {

  Property: any = {
    "Name":"Sahid",
    "Type":"house",
    "Price":"10 lakhs"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
