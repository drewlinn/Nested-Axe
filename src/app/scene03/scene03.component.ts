import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { CharacterComponent } from '../character/character.component';

@Component({
  selector: 'app-scene03',
  templateUrl: './scene03.component.html',
  styleUrls: ['./scene03.component.scss'],
  providers: [CharacterService]
})
export class Scene03Component implements OnInit {
  constructor( private characterService: CharacterService ) { }

  ngOnInit() {
   }

   scene05Change(activeCharacter){
     activeCharacter.activeCharacter.scene = "scene05";
   }
   scene06Change(activeCharacter){
     activeCharacter.activeCharacter.scene = "scene06";
   }
}
