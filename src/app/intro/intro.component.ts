import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations: [
    trigger('crawl', [
      // state('in', style({transform: 'translateY(-50%)'})),
      transition(':enter', [
        style({transform: 'translateY(60%)'}),
        animate(17500, style({transform: 'translateY(-50%)'}))
        ])
      ])
  ]
  //end animation
})//end component decorator
export class IntroComponent {
  state: string = 'in';

  constructor() { }

  ngOnInit() { }
  //
  // ngAfterViewChecked() {
  //   this.animateMe();
  // }

  // animateMe() {
  //   this.state = (this.state === 'begin' ? 'end' : 'begin')
  // }

}
