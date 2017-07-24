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
  activeCharacter;
  constructor( private characterService: CharacterService ) { }

  ngOnInit() {
    // this.characterService.getCharacter().subscribe(response => {
    // this.activeCharacter = response.json();
    // console.log(response.json().scene);
    // });
   }

  scene02Change(activeCharacter){
    this.characterService.updateCharacter(activeCharacter.scene = "scene02")
    console.log(activeCharacter);
  }
  scene03Change(activeCharacter){
    this.characterService.updateCharacter(activeCharacter.scene = "scene03")
  }
}
