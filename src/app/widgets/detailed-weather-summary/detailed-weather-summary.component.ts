import {Component, Input} from '@angular/core';
import {IconMapperService} from '../../services/icon-mapper.service';
import WeatherForecast from "./weather-forecast";

@Component({
  selector: 'detailed-weather-summary',
  templateUrl: './detailed-weather-summary.component.html',
  styleUrls: ['./detailed-weather-summary.component.scss'],
  providers: [IconMapperService]
})
export class DetailedWeatherSummaryComponent {

  private _weatherStation:WeatherForecast;

  private readonly DAYS: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  public ACTIONS: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


  constructor(private iconService:IconMapperService) {

  }

  getIcon():string {
    if (this._weatherStation) {
      return '../../../assets/images/150x150/' + this.iconService.getIconName(this._weatherStation.icon);
    }
    else {
      return '';
    }
  }

  getDay():string {
    if (this._weatherStation) {
      let day = new Date(this._weatherStation.dt * 1000).getDay();
      return this.DAYS[day];
    }
    else {
      return '';
    }
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
