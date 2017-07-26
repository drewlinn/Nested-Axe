import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {
   scene01: boolean = true;
   scene02: boolean = false;
   scene03: boolean = false;
   scene04: boolean = false;
   scene05: boolean = false;
   scene06: boolean = false;
   scene07: boolean = false;

   toggleScene(sceneTogOne: boolean,sceneTogTwo: boolean ) {
     sceneTogOne === false;
     if(sceneTogTwo === true) {
       return sceneTogOne === false;
     }
   }

  constructor() { }

  ngOnInit() {
  }

}
