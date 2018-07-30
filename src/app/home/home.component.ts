import { Component, OnInit } from '@angular/core';
import { FormControl } from '../../../node_modules/@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Data = [];
  inCurrency = 'USD';
  outCurrency = 'USD';
  inValue = 1;
  outValue = 1;
  multiplyFactor = 1;

  inCurrencyValue = new FormControl(1);

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  changeMultiplyFactor() {
    console.log('In', this.inValue);
    console.log('Out', this.outValue);
    this.multiplyFactor = this.outValue / this.inValue;
    console.log('Multiply', this.multiplyFactor);
    return this.multiplyFactor;
  }

  changeInValue(currencyIn: string) {
    this.inCurrency = 'USD' + currencyIn;
    this.inValue = this.appService.Data[this.inCurrency];
    this.changeMultiplyFactor();
    console.log(this.multiplyFactor, '||||', this.inCurrency, '/////', this.outCurrency);
  }

  changeOutValue(currencyOut: string) {
    this.outCurrency = 'USD' + currencyOut;
    this.outValue = this.appService.Data[this.outCurrency];
    this.changeMultiplyFactor();
  }

  loadData() {
    Object.keys(this.appService.Data).forEach(element => {
      element = element.slice(3, 6);
      this.Data.push(element);
    });

    return this.Data;
  }

}
