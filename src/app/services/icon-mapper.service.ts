import { Injectable } from '@angular/core';

const ICON_MAPPER = {
  "01n":"moon.gif",
  "01d":"sunny.gif",
  "02n":"p-c-night.gif",
  "02d":"m-cloudy.gif",
};

@Injectable()
export class IconMapperService {

  constructor() { }

  getIconName(iconDescription: string) {
  return ICON_MAPPER[iconDescription];
}


}
