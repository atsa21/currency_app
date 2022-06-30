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

  base = 'UAH';
  cont2 = 'UAH';
  result: number | undefined;
  userInput2: number | undefined;
  finalresult: number | undefined;
  SimpleChanges: any;

  changebase(a: string) {
    this.base = a;
  }

  tocurrency(b: string) {
    this.cont2 = b;
  }

  convert() {
    this.currency.getcurrencydata(this.base).subscribe(data => {
      this.currjson = JSON.stringify(data)
      this.currjson = JSON.parse(this.currjson)

      if (this.cont2 == 'UAH'){
        this.result = this.currjson.rates.UAH;
        this.calculateCurrency();
      }

      if (this.cont2 == 'USD'){
        this.result = this.currjson.rates.USD;
        this.calculateCurrency();
      }

      if (this.cont2 == 'EUR'){
        this.result = this.currjson.rates.EUR;
        this.calculateCurrency();
      }

      if (this.cont2 == 'GBP'){
        this.result = this.currjson.rates.GBP;
        this.calculateCurrency();
      }
    })
  }

  calculateCurrency() {
    if(this.userInput2 && this.result) {
      this.finalresult = this.userInput2 * this.result;
    }
  }

}
