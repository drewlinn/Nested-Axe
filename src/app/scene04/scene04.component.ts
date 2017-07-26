import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { CharacterComponent } from '../character/character.component';

@Component({
  selector: 'app-scene04',
  templateUrl: './scene04.component.html',
  styleUrls: ['./scene04.component.scss'],
  providers: [CharacterService]
})
export class Scene04Component implements OnInit {
  constructor( private characterService: CharacterService ) { }

  ngOnInit() {
   }

   scene07Change(activeCharacter){
     activeCharacter.activeCharacter.scene = "scene07";
   }
}
