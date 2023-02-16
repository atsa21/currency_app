import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private url: string = 'https://api.exchangerate.host/latest?base=';

  constructor(private http: HttpClient) {}

  getCurrencyData(currency: string): Observable<any> {
    return of(this.http.get(`${this.url}${currency}`));
  }
  
  getOnlineCurrencyData(onlineCurrency: string): Observable<any> {
    return of(this.http.get(`${this.url}${onlineCurrency}`));
  }
}
