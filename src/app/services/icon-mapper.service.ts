import { Injectable } from '@angular/core';

const ICON_MAPPER = {
  "01n":"moon.gif",
  "02n":"p-c-night.gif",
  "03n":"m-cloudy-night.gif",
  "04n":"p-c-night.gif",
  "09n":"m-c-night-rain.gif",
  "10n":"p-c-night-rain.gif",
  "11n":"thunder-storm.gif",
  "13n":"p-c-night-snow.gif",
  "50n":"fog.gif",
  "01d":"sunny.gif",
  "02d":"m-cloudy.gif",
  "03d":"partly-cloudy.gif",
  "04d":"cloudy.gif",
  "09d":"showers.gif",
  "10d":"rainy.gif",
  "11d":"thunder-storm.gif",
  "13d":"snow.gif",
  "50dd":"fog.gif",
};

@Injectable()
export class IconMapperService {

  constructor() { }

  getIconName(iconDescription: string) {
  return ICON_MAPPER[iconDescription];
}


}
