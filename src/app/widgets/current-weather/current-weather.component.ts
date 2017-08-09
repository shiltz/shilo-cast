import {Component, Input} from '@angular/core';
import {Weather} from './mock-weather';
import WeatherForecast from "../weather-summary/weather-forecast";
import Map from "../detailed-weather/map";

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent {

  private weather = new Weather().weather;

  @Input('weather')
  private weatherStation:WeatherForecast;

  constructor() {

  }

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
    weather.header = 'Sandton';
    return weather;
  }

  getCurrentWeatherConditions():Map[] {
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

    let conditions:Map[] = new Array();
    conditions.push(new Map('pressure', '1023'));
    conditions.push(new Map('humidity', '19'));
    conditions.push(new Map('temp_min', '284.15'));
    conditions.push(new Map('temp_min', '284.15'));
    conditions.push(new Map('temp_max', '292.15'));
    return conditions;
  }


}
