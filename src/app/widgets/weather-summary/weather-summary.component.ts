import {Component, Input} from '@angular/core';
import {IconMapperService} from '../../services/icon-mapper.service';
import WeatherForecast from "./weather-forecast";

@Component({
  selector: 'weather-summary',
  templateUrl: './weather-summary.component.html',
  styleUrls: ['./weather-summary.component.scss'],
  providers: [IconMapperService]
})
export class WeatherSummaryComponent {

  private _weatherStation:WeatherForecast;


  public ACTIONS: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


  constructor(private iconService:IconMapperService) {

  }

  getIcon():string {
    if (this._weatherStation) {
      return '../../../assets/images/150x150/' + this.iconService.getIconName(this._weatherStation.icon);
    }
    else {
      console.log('asd' + this._weatherStation.icon);
      return '';
    }
  }

  getTemperature():number {
    return this._weatherStation ? this._weatherStation.temp : 0;
  }

  @Input('weather')
  set weatherStation(weatherStation:WeatherForecast) {
    this._weatherStation = weatherStation;
  }

  get weatherStation():WeatherForecast {
    return this._weatherStation;
  }

  getWeatherStation():WeatherForecast {
    return this._weatherStation;
  }
}
