import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { CharacterComponent } from '../character/character.component';

@Component({
  selector: 'app-scene01',
  templateUrl: './scene01.component.html',
  styleUrls: ['./scene01.component.scss'],
  providers: [CharacterService]
})
export class Scene01Component implements OnInit {
  characterId: string;
  constructor( private characterService: CharacterService ) { }
  ngOnInit() {
   }

  scene02Change(activeCharacter){
    this.characterId = activeCharacter.activeCharacter.characterId;
    activeCharacter.activeCharacter.scene = "scene02";
    this.characterService.updateCharacter(activeCharacter.characterId);
    console.log(activeCharacter.activeCharacter);
    console.log(this.characterId);
  }
  scene03Change(activeCharacter){
    activeCharacter.activeCharacter.scene = "scene03";
  }
}
