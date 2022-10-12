import {Injectable} from "@angular/core";
import {BehaviorSubject, debounceTime, distinctUntilChanged, Subject} from "rxjs";
import {CdkTableDataSourceInput} from "@angular/cdk/table";

@Injectable({
  providedIn: 'root'
})

export class ExchangeRateHistoryService {
  private exchangeRateHistory: CdkTableDataSourceInput<any> = []

  public exchangeRateHistory$: BehaviorSubject<any>;
  public exchangeRateHistoryUpdate$: Subject<any>;

  constructor() {
    this.exchangeRateHistory$ = new BehaviorSubject<any>(this.exchangeRateHistory);
    this.exchangeRateHistoryUpdate$ = new Subject<any>();

    this.exchangeRateHistoryUpdate$
      .pipe(
        distinctUntilChanged(),
        debounceTime(500),
      )
      .subscribe((data) => this.updateExchangeRateHistory(data))
  }

  private updateExchangeRateHistory(data: any) {
    (this.exchangeRateHistory as Array<any>).unshift(data);
    if ((this.exchangeRateHistory as Array<any>).length > 5) {
      (this.exchangeRateHistory as Array<any>).pop();
    }
    this.exchangeRateHistory$.next([...(this.exchangeRateHistory as Array<any>)]);
  }
}
