import { Component } from '@angular/core';
import { Weather } from './mock-weather';

@Component({
  selector: 'detailed-weather',
  templateUrl: './detailed-weather.component.html',
  styleUrls: ['./detailed-weather.component.scss']
})
export class DetailedWeatherComponent {

  private readonly weather:any = new Weather().weather;

  constructor() { }


}
