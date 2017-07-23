import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { CurrentWeatherComponent } from './widgets/current-weather/current-weather.component';
import { ForecastWeatherComponent } from './widgets/forecast-weather/forecast-weather.component';
import { WeatherSummaryComponent } from './widgets/weather-summary/weather-summary.component';
import { DetailedWeatherComponent } from './widgets/detailed-weather/detailed-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    CurrentWeatherComponent,
    ForecastWeatherComponent,
    WeatherSummaryComponent,
    DetailedWeatherComponent
  ],
  imports: [
    BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
