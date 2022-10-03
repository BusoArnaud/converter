import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ExchangeRateHistoryService} from "./exchange-rate-history.service";

@Component({
  selector: 'app-exchange-rate-history',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './exchange-rate-history.component.html',
})
export class ExchangeRateHistoryComponent {
  displayedColumns: string[] = ['rate', 'forcedRate', 'initialValue', 'calculatedValue'];

  constructor(
    public exchangeRateHistoryService: ExchangeRateHistoryService
  ) { }


}
