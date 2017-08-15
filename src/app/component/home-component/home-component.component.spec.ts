import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';

import { HomeComponent } from './home-component.component';
import {HttpClient} from "@angular/common/http";
import {HttpTestingController} from "@angular/common/http/testing";

import * as weatherSummary from './mock-weather-summary';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {NO_ERRORS_SCHEMA, DebugElement} from "@angular/core";


describe('HomeComponent', () => {
  let component: any;
  let element: any;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      imports: [
        HttpClientTestingModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
    element = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should make a GET to retrieve a summary on init', inject([HttpClient, HttpTestingController], (http:HttpClient,
                                                                                                     httpMock:HttpTestingController) => {
    const req = httpMock.expectOne('http://localhost:8080/weatherForecast');
    expect(req.request.method).toEqual('GET');
    req.flush(weatherSummary);
    httpMock.verify();
    expect(component.weatherSummary).toBeTruthy();
    expect(component.weatherSummary.default.list.length).toEqual(3);
  }));

  it('should have 3 current weather components', inject([HttpClient, HttpTestingController], (http:HttpClient,
                                                                                                     httpMock:HttpTestingController) => {
    const req = httpMock.expectOne('http://localhost:8080/weatherForecast');
    expect(req.request.method).toEqual('GET');
    req.flush(weatherSummary);
    httpMock.verify();

    expect(element.querySelectorAll('current-weather').length).toEqual(3);
  }));
});
