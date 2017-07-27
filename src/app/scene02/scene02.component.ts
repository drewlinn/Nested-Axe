import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { CharacterDetailComponent } from '../character-detail/character-detail.component';
import { CharacterService } from '../character.service';
import { CharacterComponent } from '../character/character.component';
import { Character } from '../character.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-scene02',
  templateUrl: './scene02.component.html',
  styleUrls: ['./scene02.component.scss'],
  providers: [CharacterService]
})
export class Scene02Component implements OnInit {

  characterId: string;
  characters: FirebaseListObservable<any[]>;
  @Input() selectedCharacter;
  characterToPlay: Character;
  currentRoute: string = this.router.url;

  constructor(private route: ActivatedRoute, private location: Location, private router: Router, private characterService: CharacterService) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.characterId = urlParametersArray['id'];
    });
    this.characters = this.characterService.getCharacters();
  }

  scene04Change(activeCharacter, characterId){
    activeCharacter.activeCharacter.scene = "scene04";
    this.characterService.saveCharacter(activeCharacter.activeCharacter, this.characterId);
  }
  scene05Change(activeCharacter, characterId){
    activeCharacter.activeCharacter.scene = "scene05";
    this.characterService.saveCharacter(activeCharacter.activeCharacter, this.characterId);
  }
}
