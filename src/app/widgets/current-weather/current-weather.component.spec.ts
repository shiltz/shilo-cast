import { TestBed, async } from '@angular/core/testing';

import { CurrentWeatherComponent } from './current-weather.component';
import { WeatherSummaryComponent } from '../weather-summary/weather-summary.component';

describe('CurrentWeatherComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CurrentWeatherComponent,
        WeatherSummaryComponent
      ],
    }).compileComponents();
  }));

  it('should create the current weather component', async(() => {
    const fixture = TestBed.createComponent(CurrentWeatherComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should render the header correctly', async(() => {
    const fixture = TestBed.createComponent(CurrentWeatherComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toEqual('Current Weather');
  }));

  it('should render 1 weather summaries', async(() => {
    const fixture = TestBed.createComponent(CurrentWeatherComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('weather-summary').length).toEqual(1);
  }));
});
