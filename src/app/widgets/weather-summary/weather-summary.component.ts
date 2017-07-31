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

  private readonly DAYS: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor(private iconService:IconMapperService) {

  }

  getIcon():string {
    return '../../../assets/images/150x150/' + this.iconService.getIconName(this._weatherStation.icon);
  }

  getTemperature(): number {
    return this._weatherStation.temp - 273.16;
  }

  getDay(): string {
    let day = new Date(this._weatherStation.dt * 1000).getDay();
    return this.DAYS[day];
  }

  @Input('weather')
  set weatherStation(weatherStation:WeatherForecast){
    this._weatherStation = weatherStation;
  }

  get weatherStation():WeatherForecast{
    return this._weatherStation;
  }
}
