import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/hero';

import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // heroes = HEROES;

  // not needed because it was taken out on the html dashoboard
  // selectedHero: Hero;

  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }
  // not needed because it was taken out on the html dashbaord
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // }
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
