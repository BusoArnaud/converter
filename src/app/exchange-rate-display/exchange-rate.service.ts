import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

const timeInterval: number = 3000;

@Injectable({
  providedIn: 'root'
})

export class ExchangeRateService {
  private exchangeRate: number = 1.1;
  private interval;

  public exchangeRate$: BehaviorSubject<number>;

  constructor() {
    this.exchangeRate$ = new BehaviorSubject<number>(this.exchangeRate);
    this.interval = setInterval(
      () => this.rateGenerator(),
      timeInterval
    )
  }

  private rateGenerator(): void {
    let random = parseFloat((Math.random() * 0.05).toFixed(2));
    random *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;
    this.exchangeRate = parseFloat((this.exchangeRate + random).toFixed(2));
    this.exchangeRate$.next(this.exchangeRate);
  }

  stopInterval() {
    clearInterval(this.interval);
  }

}
