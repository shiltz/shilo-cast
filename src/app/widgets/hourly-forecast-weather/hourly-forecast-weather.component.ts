import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import WeatherForecast from "../weather-summary/weather-forecast";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'hourly-forecast-weather',
  templateUrl: './hourly-forecast-weather.component.html',
  styleUrls: ['./hourly-forecast-weather.component.scss']
})
export class HourlyForecastWeatherComponent implements OnChanges{

  private readonly DAYS: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


  @Input('hourlyForecast')
  private hourlyForecast:any;

  public hourlyForecastList: Array<WeatherForecast> = new Array<WeatherForecast>();

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {
      if( 'hourlyForecast' === propName && !isNullOrUndefined(changes[propName].currentValue)){
        this.hourlyForecastList = new Array<WeatherForecast>();
        changes[propName].currentValue.list.forEach((forecast) => {
          this.hourlyForecastList.push(this.createCurrentWeatherForecast(forecast))
        });
      }
    }
  }

  createCurrentWeatherForecast(weather):WeatherForecast {
      let forecast = new WeatherForecast();
      forecast.id = weather.id;
      forecast.main = weather.weather[0].main;
      forecast.description = weather.weather[0].description;
      forecast.icon = weather.weather[0].icon;
      forecast.temp = weather.main.temp;
      forecast.pressure = weather.main.pressure;
      forecast.humidity = weather.main.humidity;
      forecast.temp_min = weather.main.temp_min;
      forecast.temp_max = weather.main.temp_max;
      forecast.visibility = weather.main.visibility;
      forecast.dt = weather.dt;
      forecast.country = weather.sys ? weather.sys.country : '';
      forecast.city = weather.name;
      forecast.header = weather.name;
      forecast.additionalInfo = this.getDay(weather.dt);
      return forecast;

  }

  getDay(epoch):string {
    let hours = new Date(epoch * 1000).getHours();
    return hours.toString() +":00";
  }

}
