import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OnlineCurrency } from '../models/online-currency';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private url: string = 'https://api.exchangerate.host/';

  constructor(private http: HttpClient) {}

  public getCurrency(currency: string): Observable<OnlineCurrency> {
    const queryParams = {
      symbols: 'UAH',
      places: 2
    };
    return this.http.get<OnlineCurrency>(`${this.url}/latest?base=${currency}`, { params: queryParams });
  }

  public getConvCurrency(from: string, to: string, value: number): Observable<any> {
    const queryParams = {
      places: 2,
      amount: value
    };
    return this.http.get<any>(`${this.url}/convert?from=${from}&to=${to}`, { params: queryParams });
  }
}
