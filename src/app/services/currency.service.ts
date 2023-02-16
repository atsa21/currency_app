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
    return this.http.get<OnlineCurrency>(`${this.url}/latest?base=${currency}`);
  }

  public getConvertedValue(from: string, to: string): Observable<any> {
    return this.http.get<any>(`${this.url}/convert?from=${from}&to=${to}`);
  }
}
