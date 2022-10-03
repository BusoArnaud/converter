import {ChangeDetectionStrategy, Component, OnDestroy} from '@angular/core';
import {ExchangeRateService} from "./exchange-rate.service";

@Component({
  selector: 'app-exchange-rate-display',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<h1>Exchange rate EUR/USD : {{exchangeRateService.exchangeRate$ | async }}</h1>`,
})
export class ExchangeRateDisplayComponent implements OnDestroy {

  constructor(public exchangeRateService: ExchangeRateService) { }

  ngOnDestroy(): void {
    this.exchangeRateService.stopInterval();
  }

}
