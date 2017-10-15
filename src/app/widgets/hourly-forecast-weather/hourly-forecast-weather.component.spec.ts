import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyForecastWeatherComponent } from './hourly-forecast-weather.component';
import {Input, Component} from "@angular/core";

@Component({
  selector: 'weather-summary',
  template: '<p>weather summary</p>'
})
class WeatherSummary {

  @Input()
  weather: any;
}

describe('HourlyForecastWeatherComponent', () => {
  let component: HourlyForecastWeatherComponent;
  let fixture: ComponentFixture<HourlyForecastWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourlyForecastWeatherComponent, WeatherSummary ]
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
