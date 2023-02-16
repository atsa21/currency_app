import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public usd: number = 0;
  public eur: number = 0;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.getCurrency('USD');
    this.getCurrency('EUR');
  }

  private getCurrency(currency: string): void {
    this.currencyService.getCurrency(currency).subscribe(data => {
      if(data) {
        const res = JSON.stringify(data);
        const currjson = JSON.parse(res);
        const convertedValue = currjson.rates.UAH
        currency === 'USD' ? this.usd = convertedValue : this.eur = convertedValue;
      }
    })
  }

}
