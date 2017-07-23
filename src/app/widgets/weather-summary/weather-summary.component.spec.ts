import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSummaryComponent } from './weather-summary.component';

describe('WeatherSummaryComponent', () => {
  let component: WeatherSummaryComponent;
  let fixture: ComponentFixture<WeatherSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render the header correctly', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('15'); //TODO: test degrees
  }));

  it('should return the correct day', async(() => {
    expect(component.getDay()).toEqual('Sunday');
  }));

  it('should return the correct temperature', async(() => {
    expect(component.getTemperature()).toEqual(15);
  }));

});
