import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string ='iroman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.charAt(0).toUpperCase() + this.name.slice(1);
  }

  getHeroDescription(): string {
    return `El héroe ${this.name} tiene ${this.age} años`;
  }

  changeHero():void{
    this.name = 'spiderman';

  }
  changeAge():void{
    this.age = 10;

  }

  reset():void{
    this.name = 'iroman';
    this.age = 45;
  }
}
