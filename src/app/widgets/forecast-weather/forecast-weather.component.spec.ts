import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastWeatherComponent } from './forecast-weather.component';
import {Component, Input} from "@angular/core";

@Component({
  selector: 'detailed-weather-summary',
  template: '<p>detailed weather summary</p>'
})
class DeatiledWeatherSummary {

  @Input()
  weather: any;
}

describe('ForecastWeatherComponent', () => {
  let component: ForecastWeatherComponent;
  let fixture: ComponentFixture<ForecastWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForecastWeatherComponent, DeatiledWeatherSummary ]
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
    expect(compiled.querySelector('h4').textContent).toEqual('5 Day Forecast');
  }));


  it('should render 5 weather summaries', async(() => {
    const fixture = TestBed.createComponent(ForecastWeatherComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelectorAll('detailed-weather-summary').length).toEqual(5);
  }));
});
