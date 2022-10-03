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

  transform(amount: number | null, rate: number | null, isDollar: boolean, forcedRate: number): number {
    if (amount == null || rate == null) {
      return 0;
    }

    const variation: number = (((forcedRate * 100)/rate) - 100);
    let result;
    if (forcedRate > 0 && Math.abs(variation) < 2) {
      result = isDollar ? amount / forcedRate : amount * forcedRate;
      this.exchangeRateHistoryService.exchangeRateHistoryUpdate$.next({
        rate,
        forcedRate,
        initialValue: `${+amount.toFixed(2)} ${isDollar ? '$' : '€'}`,
        calculatedValue: `${+result.toFixed(2)} ${!isDollar ? '$' : '€'}`,
      });
    } else {
      result = isDollar ? amount / rate : amount * rate;
      this.exchangeRateHistoryService.exchangeRateHistoryUpdate$.next({
        rate,
        forcedRate,
        initialValue: `${+amount.toFixed(2)} ${isDollar ? '$' : '€'}`,
        calculatedValue: `${+result.toFixed(2)} ${!isDollar ? '$' : '€'}`,
      });
    }
    return result;
  }
}
