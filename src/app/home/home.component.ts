import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '../../../node_modules/@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Data = [];
  inCurrency: string;
  outCurrency: string;
  inValue = 1;
  outValue = 1;
  multiplyFactor = 1;

  inCurrencyValue = new FormControl(1, Validators.required);

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.Data.push('USD');
    this.outCurrency = 'USD';
    this.inCurrency = 'USD';
  }

  changeMultiplyFactor() {
    this.multiplyFactor = this.outValue / this.inValue;
    return this.multiplyFactor;
  }

  changeInValue(currencyIn: string) {
    this.inCurrency = 'USD' + currencyIn;
    this.inValue = this.appService.Data[this.inCurrency];
    this.changeMultiplyFactor();
  }

  changeOutValue(currencyOut: string) {
    this.outCurrency = 'USD' + currencyOut;
    this.outValue = this.appService.Data[this.outCurrency];
    this.changeMultiplyFactor();
  }

  loadData() {
    Object.keys(this.appService.Data).forEach(element => {
      element = element.slice(-3);
      this.Data.push(element);
    });

    return this.Data;
  }

}
