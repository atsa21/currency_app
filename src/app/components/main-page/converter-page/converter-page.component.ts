import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/models/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-converter-page',
  templateUrl: './converter-page.component.html',
  styleUrls: ['./converter-page.component.scss']
})
export class ConverterPageComponent implements OnInit {

  public firstCurrency: string = 'UAH';
  public secondCurrency: string = 'USD';

  currentRate: number | undefined;
  userInput: number | undefined;
  result: string | undefined;

  currency: Currency[] = [
    { value: 'UAH', name: 'UAH - Ukrainian hryvnia' },
    { value: 'USD', name: 'USD - United States dollar' },
    { value: 'EUR', name: 'EUR - Euro' },
    { value: 'GBP', name: 'GBP - British Pound' },
  ];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {}

  public convertCurrency(): void {
    this.currencyService.getCurrency(this.firstCurrency).subscribe(data => {
      const res = JSON.stringify(data);
      const currjson = JSON.parse(res);
      const value = this.secondCurrency;
      this.currentRate = currjson.rates[value]
      this.calculateCurrency();
    })
  }

  calculateCurrency(): void {
    if(this.userInput && this.currentRate) {
      const res = this.userInput * this.currentRate;
      this.result = res.toFixed(2);
    }
  }

}
