import {Component, OnInit} from '@angular/core';
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

  constructor(private http:HttpClient,
              private router:ActivatedRoute,
              private routerNav:Router) {
  }

  ngOnInit() {
    this.router.paramMap.forEach(value => {
      this.http.get('https://polar-badlands-69667.herokuapp.com/forecast/' + value.get('name')).subscribe(
        (data:any) => {
          this.hourlyForecast = data.hourly;
          this.dailyForecast = data.forecast;
        },
        (error:any) => {
          if (error.status === 404) {
            //Go to not found page
            this.routerNav.navigate(['404']);

          }
        }
      );
      this.http.get('https://polar-badlands-69667.herokuapp.com/current/' + value.get('name')).subscribe(
        (data:any) => {
          this.currentWeather = data;
        },
        (error:any) => {
          if (error.status === 404) {
            //Go to not found page
            this.routerNav.navigate(['404']);
          }
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
