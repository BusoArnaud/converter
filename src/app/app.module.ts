import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { ExchangeRateDisplayComponent } from './exchange-rate-display/exchange-rate-display.component';
import { ExchangeRateConverterComponent } from './exchange-rate-converter/exchange-rate-converter.component';
import { ExchangeRateConverterPipe } from "./exchange-rate-converter/exchange-rate-converter.pipe";

import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeRateDisplayComponent,
    ExchangeRateConverterComponent,
    ExchangeRateConverterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
