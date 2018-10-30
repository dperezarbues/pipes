import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from './currency.service';

@Pipe({
  name: 'currencyFinance'
})
export class CurrencyFinancePipe implements PipeTransform {

  constructor (public currencySrvc: CurrencyService) {}

  transform(value: any): any {
    return this.currencySrvc.wrapCurrency(value);
  }

}
