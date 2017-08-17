import { Component, OnInit } from '@angular/core';
import WeatherForecast from "../../widgets/weather-summary/weather-forecast";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'city-weather-component',
  templateUrl: './city-weather-component.component.html',
  styleUrls: ['./city-weather-component.component.scss']
})
export class CityWeatherComponentComponent implements OnInit {

  private dailyForecast:any;

  private hourlyForecast:any;

  private currentWeather:any;

  constructor(private http: HttpClient,
              private router: ActivatedRoute) { }

  ngOnInit() {
this.router.paramMap.forEach(value => {
  console.log('asd:' + value.get('name'));
  this.http.get('http://localhost/detailed_summary.json').subscribe(
    (data:any) => {
      this.hourlyForecast = data.hourly;
      this.dailyForecast = data.forecast;
      // this.currentWeather = data.list;

    }
  );
  this.http.get('http://localhost/weather_summary.json').subscribe(
    (data :any) => {
      this.currentWeather = data.list[0];
    }
  );
});

  }

  getCurrentWeather():any {
    return this.currentWeather;
  }

  getDailyForecast():any {
    return this.dailyForecast;
  }

  getHourlyForecast():any {
    return this.hourlyForecast;
  }

}
