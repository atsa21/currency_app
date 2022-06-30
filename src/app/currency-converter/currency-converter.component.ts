import { Component } from '@angular/core';
import { CurrencyapidataService } from '../currency/currencyapidata.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css']
})
export class CurrencyConverterComponent {

  constructor(private currency: CurrencyapidataService) {}

  ngOnInit(): void {
  }

  title = 'currency_converter';
  currjson: any = [];

  firstCurrency = 'UAH';
  secondCurrency = 'UAH';
  currentRate: number | undefined;
  userInput: number | undefined;
  result: number | undefined;

  changeFirstCurrency(firstCurr: string) {
    this.firstCurrency = firstCurr;
  }

  changeSecondCurrency(secondCurr: string) {
    this.secondCurrency = secondCurr;
  }

  convertCurrency() {
    this.currency.getCurrencyData(this.firstCurrency).subscribe(data => {

      this.currjson = JSON.stringify(data);
      this.currjson = JSON.parse(this.currjson);

      switch (this.secondCurrency) {
        case 'UAH':
          this.currentRate = this.currjson.rates.UAH;
          this.calculateCurrency();
          break;
        case 'USD':
          this.currentRate = this.currjson.rates.USD;
          this.calculateCurrency();
          break;
        case 'EUR':
          this.currentRate = this.currjson.rates.EUR;
          this.calculateCurrency();
          break;
        case 'GBP':
          this.currentRate = this.currjson.rates.GBP;
          this.calculateCurrency(); 
          break;
        default:
          console.log(`Error`);
      }
    })
  }

  calculateCurrency() {
    if(this.userInput && this.currentRate) {
      this.result = this.userInput * this.currentRate;
    }
  }

}
