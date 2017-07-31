import { Component } from '@angular/core';
import WeatherForecast from "../weather-summary/weather-forecast";

@Component({
  selector: 'hourly-forecast-weather',
  templateUrl: './hourly-forecast-weather.component.html',
  styleUrls: ['./hourly-forecast-weather.component.scss']
})
export class HourlyForecastWeatherComponent {

  constructor() { }

  getCurrentWeather():WeatherForecast {
    let weather = new WeatherForecast();
    weather.id = '800';
    weather.main = 'Clear';
    weather.description = 'clear sky';
    weather.icon = '01n';
    weather.temp = 288.16;
    weather.pressure = 1023;
    weather.humidity = 19;
    weather.temp_min = 284.15;
    weather.temp_max = 292.15;
    weather.visibility = 10000;
    weather.dt = 1500220800;
    weather.country = 'ZA';
    weather.city = 'Sandton';
    return weather;
  }
}
