import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exchangeRateConverter',
})
export class ExchangeRateConverterPipe implements PipeTransform {

  transform(amount: number | null, rate: number | null, isDollar: boolean): number {
    if (amount == null || rate == null) {
      return 0;
    }

    const result = isDollar ? amount / rate : amount * rate;
    return result;
  }
}
