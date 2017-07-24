import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './widgets/current-weather/current-weather.component';
import { ForecastWeatherComponent } from './widgets/forecast-weather/forecast-weather.component';
import { WeatherSummaryComponent } from './widgets/weather-summary/weather-summary.component';
import { DetailedWeatherComponent } from './widgets/detailed-weather/detailed-weather.component';
import { HourlyForecastWeatherComponent } from './widgets/hourly-forecast-weather/hourly-forecast-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    ForecastWeatherComponent,
    WeatherSummaryComponent,
    DetailedWeatherComponent,
    HourlyForecastWeatherComponent
  ],
  imports: [
    BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
