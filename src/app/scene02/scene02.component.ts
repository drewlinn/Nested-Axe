import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { CharacterComponent } from '../character/character.component';

@Component({
  selector: 'app-scene02',
  templateUrl: './scene02.component.html',
  styleUrls: ['./scene02.component.scss'],
  providers: [CharacterService]
})
export class Scene02Component implements OnInit {
  constructor( private characterService: CharacterService ) { }

  ngOnInit() {
   }

   scene04Change(activeCharacter){
     activeCharacter.activeCharacter.scene = "scene04";
     console.log(activeCharacter.characterId);
   }
  scene05Change(activeCharacter){
    activeCharacter.activeCharacter.scene = "scene05";
  }
}
