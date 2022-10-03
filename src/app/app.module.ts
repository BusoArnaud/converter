import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExchangeRateDisplayComponent } from './exchange-rate-display/exchange-rate-display.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRateDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
