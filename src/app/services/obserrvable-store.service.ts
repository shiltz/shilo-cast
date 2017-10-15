import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ObserrvableStoreService {
  private data:Subject<any>;

  constructor() {
    this.data = new Subject();
  }

  public get loadingObservable():Subject<any> {
    return this.data;
  }

}
