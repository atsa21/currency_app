import { Component } from '@angular/core';
import { CurrencyapidataService } from './currency/currencyapidata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency_app';

  constructor(private currency: CurrencyapidataService) {}

  currjson: any = [];

  currentValUsd: number | undefined;
  currentValEur: number | undefined;

  ngAfterViewInit() {
    this.getCurrency('usd');
    this.getCurrency('eur');
  }

  getCurrency(currency: string) {
    this.currency.getOnlineCurrencyData(currency).subscribe(data => {
      this.currjson = JSON.stringify(data);
      this.currjson = JSON.parse(this.currjson);
      let ratesUAH = this.currjson.rates.UAH;

      if (currency === 'usd') {
        this.currentValUsd = ratesUAH.toFixed(2);
      } else {
        this.currentValEur = ratesUAH.toFixed(2);
      }
    })
  }
}
