import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponent implements OnInit {

  private weatherSummary:any;
  private _durbanWeather:any;
  private _cptWeather:any;
  private _jhbWeather:any;

  constructor(private http:HttpClient) {
  }

  ngOnInit():void {
    this.http.get('https://polar-badlands-69667.herokuapp.com/summary').subscribe(
      (data :any) => {
        this.weatherSummary = data;
        this._durbanWeather = data.list[0];
        this._cptWeather = data.list[1];
        this._jhbWeather = data.list[2];
      }
    );
  }

  get currentWeatherSummary():any {
    console.log('shit:' + JSON.stringify(this.weatherSummary));
    return this.weatherSummary;
  }


  getDurbanWeather():any {
    return this._durbanWeather;
  }

  getCptWeather():any {
    return this._cptWeather;
  }

  getJhbWeather():any {
    return this._jhbWeather;
  }
}
