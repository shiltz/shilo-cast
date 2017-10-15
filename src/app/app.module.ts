import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {AppComponent} from './app.component';
import {CurrentWeatherComponent} from './widgets/current-weather/current-weather.component';
import {ForecastWeatherComponent} from './widgets/forecast-weather/forecast-weather.component';
import {WeatherSummaryComponent} from './widgets/weather-summary/weather-summary.component';
import {DetailedWeatherComponent} from './widgets/detailed-weather/detailed-weather.component';
import {HourlyForecastWeatherComponent} from './widgets/hourly-forecast-weather/hourly-forecast-weather.component';
import {HomeComponent} from './component/home-component/home-component.component';
import {CityWeatherComponentComponent} from './component/city-weather-component/city-weather-component.component';
import {DetailedWeatherSummaryComponent} from './widgets/detailed-weather-summary/detailed-weather-summary.component';

import {MdProgressSpinnerModule} from '@angular/material';
import {NotFoundExceptionComponent} from './component/not-found-exception/not-found-exception.component';
import {LoadingComponentComponent} from './component/loading-component/loading-component.component';
import {ObserrvableStoreService} from './services/obserrvable-store.service'
import {HttpLoadingInterceptorService} from './services/http-loading-interceptor.service'


const appRoutes:Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'loading', component: LoadingComponentComponent},
  {path: 'city/:name', component: CityWeatherComponentComponent, data: {magicName: 'Shilton'}},
  {path: '404', component: NotFoundExceptionComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full'},
];

  @NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    ForecastWeatherComponent,
    WeatherSummaryComponent,
    DetailedWeatherComponent,
    HourlyForecastWeatherComponent,
    HomeComponent,
    CityWeatherComponentComponent,
    DetailedWeatherSummaryComponent,
    NotFoundExceptionComponent,
    LoadingComponentComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MdProgressSpinnerModule
  ],
  providers: [ObserrvableStoreService, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpLoadingInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
