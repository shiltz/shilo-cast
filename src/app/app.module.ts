import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './widgets/current-weather/current-weather.component';
import { ForecastWeatherComponent } from './widgets/forecast-weather/forecast-weather.component';
import { WeatherSummaryComponent } from './widgets/weather-summary/weather-summary.component';
import { DetailedWeatherComponent } from './widgets/detailed-weather/detailed-weather.component';
import { HourlyForecastWeatherComponent } from './widgets/hourly-forecast-weather/hourly-forecast-weather.component';
import { HomeComponent } from './component/home-component/home-component.component';
import { CityWeatherComponentComponent } from './component/city-weather-component/city-weather-component.component';
import { DetailedWeatherSummaryComponent } from './widgets/detailed-weather-summary/detailed-weather-summary.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'city/:name', component: CityWeatherComponentComponent, data: { magicName: 'Shilton' } },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
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
    DetailedWeatherSummaryComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
      FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
