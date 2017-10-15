import {Component, OnInit} from '@angular/core';
import {ObserrvableStoreService} from "../../services/obserrvable-store.service";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'loading-component',
  templateUrl: './loading-component.component.html',
  styleUrls: ['./loading-component.component.scss']
})
export class LoadingComponentComponent implements OnInit {

  private isLoading: boolean = false;

  constructor(private observableStoreService: ObserrvableStoreService) {
  }

  ngOnInit() {
    this.observableStoreService.loadingObservable.subscribe(data => {
      this.isLoading = !isNullOrUndefined(data.show) && data.show;
    });
  }

  public getStatus(): boolean {
    return this.isLoading;
  }

}
