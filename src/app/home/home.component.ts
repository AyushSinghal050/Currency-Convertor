import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  inCurrency = 'USD';
  outCurrency = 'USD';
  multiplyFactor = 1;

  constructor() { }

  ngOnInit() {
  }

}
