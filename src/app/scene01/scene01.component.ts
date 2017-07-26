import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { CharacterDetailComponent } from '../character-detail/character-detail.component';
import { CharacterService } from '../character.service';
import { CharacterComponent } from '../character/character.component';
import { Character } from '../character.model';


@Component({
  selector: 'app-scene01',
  templateUrl: './scene01.component.html',
  styleUrls: ['./scene01.component.scss'],
  providers: [CharacterService]
})
export class Scene01Component implements OnInit {

  characterId: string;
  characters: FirebaseListObservable<any[]>;
  @Input() selectedCharacter;
  characterToPlay: Character;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private characterService: CharacterService) { }

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
  }

  scene02Change(activeCharacter){

    activeCharacter.activeCharacter.scene = "scene02";
    this.characterService.updateCharacter(activeCharacter.characterId);
    console.log(activeCharacter.activeCharacter);
  }
  scene03Change(activeCharacter){
    activeCharacter.activeCharacter.scene = "scene03";
  }
}
