import {TestBed, async} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {APP_BASE_HREF} from "@angular/common";

import {Component} from "@angular/core";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'router-outlet',
  template: '<p>Router Outlet</p>'
})
class RouterOutletComponent {}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        FormsModule
      ],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    }).compileComponents();


  }));

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    const app = fixture.debugElement.componentInstance;
    expect(app.weatherSummary).toBeTruthy();
  });


});
