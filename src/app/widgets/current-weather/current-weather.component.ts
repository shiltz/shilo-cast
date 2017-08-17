import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Weather} from './mock-weather';
import WeatherForecast from "../weather-summary/weather-forecast";
import Map from "../detailed-weather/map";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnChanges{

  private readonly DAYS: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


  @Input('weather')
  private weather:any;

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges) {
    // for (let propName in changes) {
    //   let chng = changes[propName];
    //   let cur  = JSON.stringify(chng.currentValue);
    //   let prev = JSON.stringify(chng.previousValue);
    //   console.log('propname' + propName);
    //   console.log('cur:' + cur);
    //   console.log('prev:'+ prev);
    // }

  }

  getCurrentWeather():WeatherForecast {
    if(!isNullOrUndefined(this.weather)) {
      let forecast = new WeatherForecast();
      forecast.id = this.weather.id;
      forecast.main = this.weather.weather[0].main;
      forecast.description = this.weather.weather[0].description;
      forecast.icon = this.weather.weather[0].icon;
      forecast.temp = this.weather.main.temp;
      forecast.pressure = this.weather.main.pressure;
      forecast.humidity = this.weather.main.humidity;
      forecast.temp_min = this.weather.main.temp_min;
      forecast.temp_max = this.weather.main.temp_max;
      forecast.visibility = this.weather.main.visibility;
      forecast.dt = this.weather.dt;
      forecast.country = this.weather.sys.country;
      forecast.city = this.weather.name;
      forecast.header = this.weather.name;
      forecast.additionalInfo = this.getDay(this.weather.dt);
      return forecast;

    }
    let weather = new WeatherForecast();
    weather.id = '';
    weather.main = '';
    weather.description = '';
    weather.icon = '';
    weather.temp = null;
    weather.pressure = null;
    weather.humidity = null;
    weather.temp_min = null;
    weather.temp_max = null;
    weather.visibility = null;
    weather.dt = null;
    weather.country = null;
    weather.city = null;
    weather.header = '';
    return weather;
  }

  getDay(epoch):string {
      let day = new Date(epoch * 1000).getDay();
      return this.DAYS[day];
  }

  getCurrentWeatherConditions():Map[] {
    let conditions:Map[] = new Array();

    if(!isNullOrUndefined(this.weather)) {
      conditions.push(new Map('pressure', this.weather.main.pressure));
      conditions.push(new Map('humidity', this.weather.main.humidity));
      conditions.push(new Map('temp_min', this.weather.main.temp_min));
      conditions.push(new Map('temp_current', this.weather.main.temp));
      conditions.push(new Map('temp_max', this.weather.main.temp_max));

    }
    return conditions;
  }

  getCityName(): string {

    return this.weather ? this.weather.name : '';
  }
}
