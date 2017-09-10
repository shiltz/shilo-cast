import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSummaryComponent } from './weather-summary.component';
import WeatherForecast from "./weather-forecast";

describe('WeatherSummaryComponent', () => {
  let component: WeatherSummaryComponent;
  let fixture: ComponentFixture<WeatherSummaryComponent>;
 let weatherStation:WeatherForecast = new WeatherForecast();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSummaryComponent);
    component = fixture.componentInstance;
    weatherStation.id = '800';
    weatherStation.main = 'Clear';
    weatherStation.description = 'clear sky';
    weatherStation.icon = '01n';
    weatherStation.temp = 288.16;
    weatherStation.pressure = 1023;
    weatherStation.humidity = 19;
    weatherStation.temp_min = 284.15;
    weatherStation.temp_max = 292.15;
    weatherStation.visibility = 10000;
    weatherStation.dt = 1500220800;
    weatherStation.country = 'ZA';
    weatherStation.city = 'Sandton';
    component.weatherStation = weatherStation;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the header correctly', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('15'); //TODO: test degrees
  }));

  it('should return the correct temperature', async(() => {
    expect(component.getTemperature()).toEqual(15);
  }));

});
