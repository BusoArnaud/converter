import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exchangeRateConverter',
})
export class ExchangeRateConverterPipe implements PipeTransform {

  transform(amount: number | null, rate: number | null): number {
    if (amount == null || rate == null) {
      return 0;
    }

    return amount * rate;
  }
}
