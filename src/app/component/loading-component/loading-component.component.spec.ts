import {async, ComponentFixture, TestBed, inject} from '@angular/core/testing';

import {LoadingComponentComponent} from './loading-component.component';
import {ObserrvableStoreService} from "../../services/obserrvable-store.service";
import {Input, Component} from "@angular/core";

@Component({
  selector: 'md-progress-spinner',
  template: '<p>md-progress-spinner</p>'
})
class MdProgressSpinner {

  @Input()
  mode: any;
}

describe('LoadingComponentComponent', () => {
  let component:LoadingComponentComponent;
  let fixture:ComponentFixture<LoadingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingComponentComponent, MdProgressSpinner],
      providers: [ObserrvableStoreService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have have an initial status of false', () => {
    expect(component.getStatus()).toBeFalsy();
  });

  describe('when an event is published with undefined data', () => {
    it('should have have a status of false', inject([ObserrvableStoreService], (obs:ObserrvableStoreService) => {
      obs.loadingObservable.next({});
      expect(component.getStatus()).toBeFalsy();
    }));
  });

  describe('when an event is published with null data', () => {
    it('should have have a status of false', inject([ObserrvableStoreService], (obs:ObserrvableStoreService) => {
      obs.loadingObservable.next({'show': undefined});
      expect(component.getStatus()).toBeFalsy();
    }));
  });

  describe('when an event is published with show data equals true', () => {
    it('should have have a status of true', inject([ObserrvableStoreService], (obs:ObserrvableStoreService) => {
      obs.loadingObservable.next({'show': true});
      expect(component.getStatus()).toBeTruthy();
    }));
  });

  describe('when an event is published with show data equals false', () => {
    it('should have have a status of false', inject([ObserrvableStoreService], (obs:ObserrvableStoreService) => {
      obs.loadingObservable.next({'show': false});
      expect(component.getStatus()).toBeFalsy();
    }));
  });
});
