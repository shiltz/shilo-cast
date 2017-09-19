import {Component, OnInit, OnDestroy} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'city-weather-component',
  templateUrl: './city-weather-component.component.html',
  styleUrls: ['./city-weather-component.component.scss']
})
export class CityWeatherComponentComponent implements OnInit, OnDestroy {

  private dailyForecast:any;

  private hourlyForecast:any;

  private currentWeather:any;

  constructor(private http:HttpClient,
              private router:ActivatedRoute,
              private routerNav:Router) {
  }

  ngOnInit() {
    this.dailyForecast = undefined;
    this.hourlyForecast = undefined;
    this.currentWeather = undefined;
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

  ngOnDestroy() {
    console.log('wtf');
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
