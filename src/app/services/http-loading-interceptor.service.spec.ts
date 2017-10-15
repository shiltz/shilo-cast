import { TestBed, inject } from '@angular/core/testing';

import { HttpLoadingInterceptorService } from './http-loading-interceptor.service';
import {ObserrvableStoreService} from './obserrvable-store.service';

describe('HttpLoadingInterceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpLoadingInterceptorService, ObserrvableStoreService]
    });
  });

  it('should be created', inject([HttpLoadingInterceptorService], (service: HttpLoadingInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});
