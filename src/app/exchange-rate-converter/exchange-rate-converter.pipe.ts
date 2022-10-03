import {Pipe, PipeTransform} from '@angular/core';
import {ExchangeRateHistoryService} from "../exchange-rate-history/exchange-rate-history.service";

@Pipe({
  name: 'exchangeRateConverter',
})
export class ExchangeRateConverterPipe implements PipeTransform {

  constructor(
    private exchangeRateHistoryService: ExchangeRateHistoryService,
  ) {
  }

  transform(amount: number | null, rate: number | null, isDollar: boolean): number {
    if (amount == null || rate == null) {
      return 0;
    }

    const result = isDollar ? amount / rate : amount * rate;

    this.exchangeRateHistoryService.exchangeRateHistoryUpdate$.next({
      rate,
      forcedRate: 0,
      initialValue: `${+amount.toFixed(2)} ${isDollar ? '$' : '€'}`,
      calculatedValue: `${+result.toFixed(2)} ${!isDollar ? '$' : '€'}`,
    });

    return result;
  }
}
