import {Component, OnInit, Input} from '@angular/core';
import * as data from './mock-weather';
import WeatherForecast from "../weather-summary/weather-forecast";


@Component({
  selector: 'forecast-weather',
  templateUrl: './forecast-weather.component.html',
  styleUrls: ['./forecast-weather.component.scss']
})
export class ForecastWeatherComponent implements OnInit {

  @Input('forecast')
  private forecast:any;

  constructor() {
  }

  ngOnInit() {

  }

  getCurrentWeather(day:number):any {
    if (this.forecast !== undefined) {
      return this.format(this.forecast.list[day]);
    }
  }

  format(data):WeatherForecast {
    let forecast = new WeatherForecast();
    forecast.id = data.id;
    forecast.main = data.weather[0].main;
    forecast.description = data.weather[0].description;
    forecast.icon = data.weather[0].icon;
    forecast.temp = data.temp.day;
    forecast.pressure = data.pressure;
    forecast.humidity = data.humidity;
    forecast.temp_min = data.temp.min;
    forecast.temp_max = data.temp.max;
    forecast.visibility = 0;
    forecast.dt = data.dt;
    forecast.country = 'asd';
    forecast.city = 'assd';
    forecast.header = 'aaaa';
    forecast.morn = data.temp.morn;
    forecast.day = data.temp.day;
    forecast.eve = data.temp.eve;
    forecast.night = data.temp.night;
    return forecast;
  }



}
