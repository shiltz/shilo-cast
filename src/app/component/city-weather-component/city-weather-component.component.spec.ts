import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWeatherComponentComponent } from './city-weather-component.component';

describe('CityWeatherComponentComponent', () => {
  let component: CityWeatherComponentComponent;
  let fixture: ComponentFixture<CityWeatherComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityWeatherComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityWeatherComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should be created', () => {
  //   expect(component).toBeTruthy();
  // });
});
