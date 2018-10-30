import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor() { }

  wrapCurrency = (currency:string) => {
    return (currency.charAt(0) === '-') ? `(${currency.substring(1,currency.length)})` : currency;
  }
}
