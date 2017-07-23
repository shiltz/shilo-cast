import {Component} from '@angular/core';
import {Weather} from './mock-weather';

@Component({
  selector: 'current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent {

  private weather = new Weather().weather;

  constructor() {

  }


}
