import { Component, OnInit } from '@angular/core';
import WeatherForecast from "../../widgets/weather-summary/weather-forecast";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'city-weather-component',
  templateUrl: './city-weather-component.component.html',
  styleUrls: ['./city-weather-component.component.scss']
})
export class CityWeatherComponentComponent implements OnInit {

  private dailyForecast:any;

  private hourlyForecast:any;

  private currentWeather:any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost/detailed_summary.json').subscribe(
      (data:any) => {
        this.hourlyForecast = data.list;
        this.dailyForecast = data.forecast;
        // this.currentWeather = data.list;
        console.log('shiloDaily' + JSON.stringify(this.dailyForecast));

      }
    );
    this.http.get('http://localhost/weather_summary.json').subscribe(
      (data :any) => {
        console.log('yoh:' + JSON.stringify(data));
        this.currentWeather = data.list[0];
      }
    );
  }

  getCurrentWeather():any {
    return this.currentWeather;
  }

  getDailyForecast():any {
    return this.dailyForecast;
  }

}
