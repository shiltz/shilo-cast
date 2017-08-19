import {Component} from '@angular/core';
import {OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit {
  private weatherSummary: any;

  public customCity: string;

  constructor(private http: HttpClient,
              private router: Router) {
  }

  ngOnInit():void {

  }

  getYear():number {
    return new Date().getFullYear();
  }

  selectCity(): void {
     this.router.navigate(['/city/' + this.customCity]);
  }
}
