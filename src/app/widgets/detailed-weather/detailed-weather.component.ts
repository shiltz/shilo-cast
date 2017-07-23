import { Component, OnInit } from '@angular/core';
import { Weather } from './mock-weather';

@Component({
  selector: 'detailed-weather',
  templateUrl: './detailed-weather.component.html',
  styleUrls: ['./detailed-weather.component.scss']
})
export class DetailedWeatherComponent implements OnInit {

  private readonly weather:any = new Weather().weather;

  constructor() { }

  ngOnInit() {
  }

}
