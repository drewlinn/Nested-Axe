import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-hero',
  templateUrl: './current-hero.component.html',
  styleUrls: ['./current-hero.component.scss']
})
export class CurrentHeroComponent implements OnInit {
  @Input() currentHero;
  constructor() { }

  ngOnInit() {
    console.log(this.currentHero);
  }

}
