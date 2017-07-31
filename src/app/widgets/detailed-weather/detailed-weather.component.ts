import {Component, Input} from '@angular/core';
import Map from "./map";

@Component({
  selector: 'detailed-weather',
  templateUrl: './detailed-weather.component.html',
  styleUrls: ['./detailed-weather.component.scss']
})
export class DetailedWeatherComponent {

  @Input('weather-conditions')
  private map:Map;

  constructor() { }


}
