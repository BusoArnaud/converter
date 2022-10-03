import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ExchangeRateService} from "../exchange-rate-display/exchange-rate.service";

@Component({
  selector: 'app-exchange-rate-converter',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './exchange-rate-converter.component.html',
})
export class ExchangeRateConverterComponent {

  public amount: any;
  public isDollar: boolean = false;
  public result: any;

  constructor(
    public exchangeRateService: ExchangeRateService
  ) { }

  switch(r: any): void {
    this.amount = +r.innerHTML.trim().slice(1);
  }

}
