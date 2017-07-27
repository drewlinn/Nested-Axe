import { Component, OnInit, AfterViewInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations: [
    trigger('myAwesomeAnimation', [

      state('begin', style ({
        transform: 'translateY(60%)',
      })),

      state('end', style ({
        transform: 'translateY(-50%)',
      })),


      transition('begin => end', animate('12s linear')),
    ]),
  ]
})
export class IntroComponent implements OnInit {
  state: string = 'begin';

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {}

  animateMe() {
    this.state = (this.state === 'begin' ? 'end' : 'begin')
  }

}
