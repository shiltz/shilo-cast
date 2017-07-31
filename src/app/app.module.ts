import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './widgets/current-weather/current-weather.component';
import { ForecastWeatherComponent } from './widgets/forecast-weather/forecast-weather.component';
import { WeatherSummaryComponent } from './widgets/weather-summary/weather-summary.component';
import { DetailedWeatherComponent } from './widgets/detailed-weather/detailed-weather.component';
import { HourlyForecastWeatherComponent } from './widgets/hourly-forecast-weather/hourly-forecast-weather.component';
import { HomeComponentComponent } from './component/home-component/home-component.component';
import { CityWeatherComponentComponent } from './component/city-weather-component/city-weather-component.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponentComponent },
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
    HomeComponentComponent,
    CityWeatherComponentComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    BrowserModule,
      FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
