import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CurrencyapidataService {

  constructor(private http:HttpClient) {}

  getCurrencyData(currency: string){
    let url = 'https://api.exchangerate.host/latest?base=' + currency;
    return this.http.get(url);
  }
  
  getOnlineCurrencyData(onlinecurrency: string){
    let url = 'https://api.exchangerate.host/latest?base=' + onlinecurrency;
    return this.http.get(url);
  }
}
