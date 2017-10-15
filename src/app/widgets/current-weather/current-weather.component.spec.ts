import { TestBed, async } from '@angular/core/testing';

import { CurrentWeatherComponent } from './current-weather.component';
import {Component, Input} from "@angular/core";

@Component({
  selector: 'weather-summary',
  template: '<p>weather summary</p>'
})
class WeatherSummaryComponent {

  @Input()
  weather: any;
}

@Component({
  selector: 'detailed-weather',
  template: '<p>detailed weather</p>'
})
class DetailedWeatherComponent {

  @Input('weather-conditions')
  mode: any;
}

describe('CurrentWeatherComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CurrentWeatherComponent,
        WeatherSummaryComponent,
        DetailedWeatherComponent
      ],
    }).compileComponents();
  }));

  it('should create the current weather component', async(() => {
    const fixture = TestBed.createComponent(CurrentWeatherComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it('should render the header correctly', async(() => {
  //   const fixture = TestBed.createComponent(CurrentWeatherComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h4').textContent).toEqual('Current Weather');
  // }));

  // it('should render 1 weather summaries', async(() => {
  //   const fixture = TestBed.createComponent(CurrentWeatherComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelectorAll('weather-summary').length).toEqual(1);
  // }));
  //
  // it('should render 1 detailed weather summary', async(() => {
  //   const fixture = TestBed.createComponent(CurrentWeatherComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelectorAll('detailed-weather').length).toEqual(1);
  // }));
});
