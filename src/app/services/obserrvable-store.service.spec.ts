import { TestBed, inject } from '@angular/core/testing';

import { ObserrvableStoreService } from './obserrvable-store.service';

describe('ObserrvableStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ObserrvableStoreService]
    });
  });

  it('should be created', inject([ObserrvableStoreService], (service: ObserrvableStoreService) => {
    expect(service).toBeTruthy();
  }));
});
