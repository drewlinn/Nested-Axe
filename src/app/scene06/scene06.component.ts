import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { CharacterComponent } from '../character/character.component';

@Component({
  selector: 'app-scene06',
  templateUrl: './scene06.component.html',
  styleUrls: ['./scene06.component.scss'],
  providers: [CharacterService]
})
export class Scene06Component implements OnInit {
  constructor( private characterService: CharacterService ) { }

  ngOnInit() {
   }

   scene07Change(activeCharacter){
     activeCharacter.activeCharacter.scene = "scene07";
   }
}
