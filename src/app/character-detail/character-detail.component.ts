import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';
import { FirebaseListObservable, FirebaseObjectObservable, } from 'angularfire2/database';

import { CharacterListComponent } from '../character-list/character-list.component';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
  providers: [CharacterService]
})
export class CharacterDetailComponent implements OnInit {
  characterId: string;
  characterToDisplay: Character;
  @Input() selectedCharacter;



  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
     this.characterId = urlParametersArray['id'];
   });
   this.characterService.getCharacterById(this.characterId).subscribe(dataLastEmittedFromObserver => {
     this.characterToDisplay = new Character(dataLastEmittedFromObserver.name,
                                      dataLastEmittedFromObserver.gender,
                                      dataLastEmittedFromObserver.charisma,
                                      dataLastEmittedFromObserver.dexterity,
                                      dataLastEmittedFromObserver.intelligence,
                                      dataLastEmittedFromObserver.strength,
                                      dataLastEmittedFromObserver.inventory,
                                      dataLastEmittedFromObserver.gold,
                                      dataLastEmittedFromObserver.scene)

   })
  }
  selectCharacter(characterToDisplay) {
    this.selectedCharacter = this.characterToDisplay;
    console.log(this.characterService.getCharacterById(this.characterId));

  }
}
