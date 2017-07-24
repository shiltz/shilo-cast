import {Component} from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Tour of heroes';

    constructor() { }

    ngOnInit(): void {
    }

    getYear(): number {
      return new Date().getFullYear();
    }
}
