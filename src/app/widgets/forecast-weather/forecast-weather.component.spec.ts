import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastWeatherComponent } from './forecast-weather.component';
import { WeatherSummaryComponent } from '../weather-summary/weather-summary.component';

describe('ForecastWeatherComponent', () => {
  let component: ForecastWeatherComponent;
  let fixture: ComponentFixture<ForecastWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastWeatherComponent, WeatherSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the header correctly', async(() => {
    const fixture = TestBed.createComponent(ForecastWeatherComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toEqual('5 Day Forecast');
  }));


  it('should render 5 weather summaries', async(() => {
    const fixture = TestBed.createComponent(ForecastWeatherComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('weather-summary').length).toEqual(5);
  }));
});
