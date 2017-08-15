import {Component, Input} from '@angular/core';
import WeatherForecast from "../weather-summary/weather-forecast";

@Component({
  selector: 'hourly-forecast-weather',
  templateUrl: './hourly-forecast-weather.component.html',
  styleUrls: ['./hourly-forecast-weather.component.scss']
})
export class HourlyForecastWeatherComponent {

  @Input('forecast')
  private forecast:any;

  constructor() {
  }

  getCurrentWeather(day:number):WeatherForecast {
    if (this.forecast !== undefined) {

      return this.forecast[day];
    }
  }

}
