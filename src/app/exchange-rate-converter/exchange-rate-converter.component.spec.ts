import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExchangeRateConverterComponent } from './exchange-rate-converter.component';

describe('ExchangeRateConverterComponent', () => {
  let component: ExchangeRateConverterComponent;
  let fixture: ComponentFixture<ExchangeRateConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExchangeRateConverterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExchangeRateConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
