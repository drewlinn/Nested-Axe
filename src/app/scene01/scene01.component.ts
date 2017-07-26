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
  constructor( private characterService: CharacterService ) { }

  ngOnInit() {
    // this.characterService.getCharacter().subscribe(response => {
    // this.activeCharacter = response.json();
    // console.log(response.json().scene);
    // });
   }

  scene02Change(activeCharacter){
    console.log(activeCharacter);
    activeCharacter.scene = "scene02";
  }
  scene03Change(activeCharacter){
    activeCharacter.scene = "scene03";
  }
}
