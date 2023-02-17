import { Component, OnDestroy, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {

  public usd: number = 0;
  public eur: number = 0;

  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.getCurrency('USD');
    this.getCurrency('EUR');
  }

  private getCurrency(currency: string): void {
    this.currencyService.getCurrency(currency).pipe(takeUntil(this.destroy$)).subscribe(data => {
      if(data) {
        const res = JSON.stringify(data);
        const currjson = JSON.parse(res);
        const convertedValue = currjson.rates.UAH
        currency === 'USD' ? this.usd = convertedValue : this.eur = convertedValue;
      }
    })
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

}
