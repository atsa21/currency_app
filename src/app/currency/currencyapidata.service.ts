import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CurrencyapidataService {

  constructor(private http:HttpClient) {}

  getcurrencydata(currency1: string){
    let url = 'https://api.exchangerate.host/latest?base=' + currency1;
    return this.http.get(url);
  }
  
  getonlinecurrencydata(onlinecurrency: string){
    let url = 'https://api.exchangerate.host/latest?base=' + onlinecurrency;
    return this.http.get(url);
  }
}
