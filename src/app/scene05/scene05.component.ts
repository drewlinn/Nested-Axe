import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { CharacterComponent } from '../character/character.component';

@Component({
  selector: 'app-scene05',
  templateUrl: './scene05.component.html',
  styleUrls: ['./scene05.component.scss'],
  providers: [CharacterService]
})
export class Scene05Component implements OnInit {
  constructor( private characterService: CharacterService ) { }

  ngOnInit() {
   }

   scene07Change(activeCharacter){
     activeCharacter.activeCharacter.scene = "scene07";
   }
}
