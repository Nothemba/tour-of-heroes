import { Component, OnInit } from '@angular/core';
import { Hero } from './Hero';
import { HEROES } from '../data/hero-mock';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero?: Hero;
  constructor() { }

  ngOnInit(): void {
  }
  
  onSelected(hero:Hero){

    this.selectedHero = hero
    console.log(this.selectedHero)
  }

}
