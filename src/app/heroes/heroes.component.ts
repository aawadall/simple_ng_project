import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";
// Decorator function containing component metadata 
@Component({
  selector: 'app-heroes', // component css element selector 
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


// note we export the component 
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor() {}

  // lifecycle hook, this is called shortly after creating the component 
  // good for initialization code 
  ngOnInit(): void { 
 
  }

}
