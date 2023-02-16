import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Currency } from 'src/app/models/currency';
import { CurrencyService } from 'src/app/services/currency.service';
import { Patterns } from 'src/assets/patterns/patterns';

@Component({
  selector: 'app-converter-page',
  templateUrl: './converter-page.component.html',
  styleUrls: ['./converter-page.component.scss']
})
export class ConverterPageComponent implements OnInit {

  public fromCurrency: string = 'UAH';
  public toCurrency: string = 'USD';

  public firstAmount: number = 0;
  public secondAmount: number = 0;
  public amountFirstControl = new FormControl(0, [Validators.max(1000000000), Validators.pattern(Patterns.ValuePattern)]);
  public amountSecondControl = new FormControl(0, [Validators.max(1000000000), Validators.pattern(Patterns.ValuePattern)]);

  public currency: Currency[] = [
    { value: 'UAH', name: 'UAH - Ukrainian hryvnia' },
    { value: 'USD', name: 'USD - United States dollar' },
    { value: 'EUR', name: 'EUR - Euro' },
    { value: 'GBP', name: 'GBP - British Pound' },
  ];

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {}

  public convertCurrency(input: string, amount: number): void {
    if(amount) {
      const from = input === 'from' ? this.fromCurrency : this.toCurrency;
      const to = input === 'from' ? this.toCurrency : this.fromCurrency;
      this.currencyService.getConvCurrency(from, to, amount).subscribe(data => {
        if(data) {
          const res = JSON.stringify(data);
          const currjson = JSON.parse(res);
          input === 'from' ? this.secondAmount = currjson.result : this.firstAmount = currjson.result;
        }
      })
    }
  }

  public switchValues(): void {
    this.firstAmount = [this.secondAmount, this.secondAmount = this.firstAmount][0];
    this.fromCurrency = [this.toCurrency, this.toCurrency = this.fromCurrency][0];
  }

}
