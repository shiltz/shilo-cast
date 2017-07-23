import { TestBed, inject } from '@angular/core/testing';

import { IconMapperService } from './icon-mapper.service';

describe('IconMapperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IconMapperService]
    });
  });

  it('should be created', inject([IconMapperService], (service: IconMapperService) => {
    expect(service).toBeTruthy();
  }));

  it('should return moon.gif for 01n parameter', inject([IconMapperService], (service: IconMapperService) => {
    expect(service.getIconName('01n')).toEqual('moon.gif');
  }));
});
