import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './widgets/current-weather/current-weather.component';
import { ForecastWeatherComponent } from './widgets/forecast-weather/forecast-weather.component';
import { WeatherSummaryComponent } from './widgets/weather-summary/weather-summary.component';
import { DetailedWeatherComponent } from './widgets/detailed-weather/detailed-weather.component';
import { HourlyForecastWeatherComponent } from './widgets/hourly-forecast-weather/hourly-forecast-weather.component';


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CurrentWeatherComponent,
        ForecastWeatherComponent,
        WeatherSummaryComponent,
        DetailedWeatherComponent,
        HourlyForecastWeatherComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Tour of heroes');
  }));

  it('should render title in a span tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('SA WEATHER FORECAST');
  }));
});
