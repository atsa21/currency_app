import { Component } from '@angular/core';
import { CurrencyapidataService } from '../currency/currencyapidata.service';

interface Cur {
  value: string;
  currency: string;
}

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

  selectedFirstCurrency: string = 'UAH';
  selectedSecondCurrency: string = 'USD';

  currentRate: number | undefined;
  userInput: number | undefined;
  result: string | undefined;

  firstCurrency: Cur[] = [
    {value: 'UAH', currency: 'UAH - Ukrainian hryvnia'},
    {value: 'USD', currency: 'USD - United States dollar'},
    {value: 'EUR', currency: 'EUR - Euro'},
    {value: 'EUR', currency: 'GBP - British Pound'},
  ];

  secondCurrency: Cur[] = [
    {value: 'UAH', currency: 'UAH - Ukrainian hryvnia'},
    {value: 'USD', currency: 'USD - United States dollar'},
    {value: 'EUR', currency: 'EUR - Euro'},
    {value: 'EUR', currency: 'GBP - British Pound'},
  ];

  convertCurrency() {
    this.currency.getCurrencyData(this.selectedFirstCurrency).subscribe(data => {

      this.currjson = JSON.stringify(data);
      this.currjson = JSON.parse(this.currjson);

      let value = this.selectedSecondCurrency;
      this.currentRate = this.currjson.rates[value]
      this.calculateCurrency();

    })
  }

  calculateCurrency() {
    if(this.userInput && this.currentRate) {
      let res = this.userInput * this.currentRate;
      this.result = res.toFixed(2);
    }
  }

}
