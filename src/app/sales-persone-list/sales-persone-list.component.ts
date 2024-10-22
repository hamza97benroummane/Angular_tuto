import { Component, OnInit } from '@angular/core';
import {SalesPerson} from './sales-person';

@Component({
  selector: 'app-sales-persone-list',
  templateUrl: './sales-persone-list.component.html',
  styleUrls: ['./sales-persone-list.component.css']
})
export class SalesPersoneListComponent implements OnInit {

  // create Array of objects
  selesPersonList: SalesPerson[] = [
    new SalesPerson("hamz", "bom", "bo@gmail.com", 4000),
    new SalesPerson("za", "bosqm", "beze@gmail.com", 5000),
    new SalesPerson("yjh", "iuy", "hgo@gmail.com", 6000)
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
