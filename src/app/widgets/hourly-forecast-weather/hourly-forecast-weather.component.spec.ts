import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyForecastWeatherComponent } from './hourly-forecast-weather.component';
import { WeatherSummaryComponent } from '../weather-summary/weather-summary.component';

describe('HourlyForecastWeatherComponent', () => {
  let component: HourlyForecastWeatherComponent;
  let fixture: ComponentFixture<HourlyForecastWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourlyForecastWeatherComponent, WeatherSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyForecastWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
