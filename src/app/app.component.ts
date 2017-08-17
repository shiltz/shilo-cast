import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  private weatherSummary: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit():void {

  }

  getYear():number {
    return new Date().getFullYear();
  }
}
