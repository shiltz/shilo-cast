import {Component, Input} from '@angular/core';
import {Weather} from './mock-weather';
import {IconMapperService} from '../../services/icon-mapper.service';
// import Weather from "./weather";

@Component({
  selector: 'weather-summary',
  templateUrl: './weather-summary.component.html',
  styleUrls: ['./weather-summary.component.scss'],
  providers: [IconMapperService]
})
export class WeatherSummaryComponent {

  // @Input('weather') weather: Weather;
  private weather = new Weather().weather;
  private readonly DAYS: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  constructor(private iconService:IconMapperService) {

  }

  getIcon():string {
    return '../../../assets/images/150x150/' + this.iconService.getIconName(this.weather.weather[0].icon);
  }

  getTemperature(): number {
    return this.weather.main.temp - 273.16;
  }

  getDay(): string {
    let day = 0;
    return this.DAYS[day];
  }
}
