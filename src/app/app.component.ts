import {Component} from '@angular/core';
import { OnInit } from '@angular/core';
import {Hero} from "./hero";
import { HeroService } from './special-super-hero.service';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [HeroService]
})
export class AppComponent implements OnInit {
    title = 'Tour of heroes';
    selectedHero: Hero;
    heroes : Hero[];

    constructor(private heroService: HeroService) { }

    ngOnInit(): void {
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    getYear(): number {
      return new Date().getFullYear();
    }
}
