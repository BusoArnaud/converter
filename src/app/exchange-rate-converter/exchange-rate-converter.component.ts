import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ExchangeRateService} from "../exchange-rate-display/exchange-rate.service";

@Component({
  selector: 'app-exchange-rate-converter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './exchange-rate-converter.component.html',
})
export class ExchangeRateConverterComponent {

  public amount: number = 0;

  constructor(
    public exchangeRateService: ExchangeRateService
  ) { }

}
