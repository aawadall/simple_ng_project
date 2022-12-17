import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HeroService } from "../hero.service";   
// Decorator function containing component metadata 
@Component({
  selector: 'app-heroes', // component css element selector 
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


// note we export the component 
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService) {}

  // lifecycle hook, this is called shortly after creating the component 
  // good for initialization code 
  ngOnInit(): void { 
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
