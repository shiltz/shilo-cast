import {TestBed, async, inject} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

import {AppComponent} from './app.component';
import {CurrentWeatherComponent} from './widgets/current-weather/current-weather.component';
import {ForecastWeatherComponent} from './widgets/forecast-weather/forecast-weather.component';
import {WeatherSummaryComponent} from './widgets/weather-summary/weather-summary.component';
import {DetailedWeatherComponent} from './widgets/detailed-weather/detailed-weather.component';
import {HourlyForecastWeatherComponent} from './widgets/hourly-forecast-weather/hourly-forecast-weather.component';
import {HttpClient} from '@angular/common/http';
import {HttpTestingController} from '@angular/common/http/testing';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./component/home-component/home-component.component";
import {CityWeatherComponentComponent} from "./component/city-weather-component/city-weather-component.component";
import {APP_BASE_HREF} from "@angular/common";

import * as weatherSummary from './mock-weather-summary';

const appRoutes:Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'city/:name', component: CityWeatherComponentComponent, data: {magicName: 'Shilton'}},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CurrentWeatherComponent,
        ForecastWeatherComponent,
        WeatherSummaryComponent,
        DetailedWeatherComponent,
        HourlyForecastWeatherComponent,
        HomeComponent,
        CityWeatherComponentComponent
      ],
      imports: [
        RouterModule.forRoot(appRoutes, {enableTracing: true}),
        HttpClientTestingModule,
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();


  }));

  beforeEach(inject([HttpClient, HttpTestingController], (http:HttpClient,
                                                          httpMock:HttpTestingController) => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    // Make an HTTP GET request, and expect that it return an object
    // of the form {name: 'Test Data'}.
    // http
    //   .get('http://localhost:8080/weatherForecast')
    //   .subscribe(data => expect(data['name']).toEqual('Test Data'));

    // At this point, the request is pending, and no response has been
    // sent. The next step is to expect that the request happened.
    const req = httpMock.expectOne('http://localhost:8080/weatherForecast');

    // If no request with that URL was made, or if multiple requests match,
    // expectOne() would throw. However this test makes only one request to
    // this URL, so it will match and return a mock request. The mock request
    // can be used to deliver a response or make assertions against the
    // request. In this case, the test asserts that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Next, fulfill the request by transmitting a response.
    req.flush(weatherSummary);

    // Finally, assert that there are no outstanding requests.
    httpMock.verify();

    const app = fixture.debugElement.componentInstance;
    expect(app.weatherSummary).toBeTruthy();
  }));

  it('should make a GET to retrieve a summary on init', inject([HttpClient, HttpTestingController], (http:HttpClient,
                                                                                                     httpMock:HttpTestingController) => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const req = httpMock.expectOne('http://localhost:8080/weatherForecast');
    expect(req.request.method).toEqual('GET');
    req.flush(weatherSummary);
    httpMock.verify();
    const app = fixture.debugElement.componentInstance;
    expect(app.weatherSummary).toBeTruthy();
  }));

  it(`should have as title 'SA WEATHER FORECAST'`, inject([HttpClient, HttpTestingController], (http:HttpClient,
                                                                                httpMock:HttpTestingController) => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const req = httpMock.expectOne('http://localhost:8080/weatherForecast');
    expect(req.request.method).toEqual('GET');
    req.flush(weatherSummary);
    httpMock.verify();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('span').textContent).toContain('SA WEATHER FORECAST');
  }));


  // it(`should have as title 'app'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('Tour of heroes');
  // }));

  // it('should render title in a span tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('span').textContent).toContain('SA WEATHER FORECAST');
  // }));
});
