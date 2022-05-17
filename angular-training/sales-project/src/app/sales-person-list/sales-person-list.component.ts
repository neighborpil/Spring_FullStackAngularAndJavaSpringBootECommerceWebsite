import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("AAA", "BBB", "Asdf@ASDf.com", 5000),
    new SalesPerson("BBB", "CCC", "BAsdf@ASDf.com", 5002),
    new SalesPerson("CCC", "DDD", "CAsdf@ASDf.com", 5003),
    new SalesPerson("DDD", "EEE", "DAsdf@ASDf.com", 5004),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
