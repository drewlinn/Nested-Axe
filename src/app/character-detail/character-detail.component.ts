import { Component, Input, OnInit } from '@angular/core';
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

  @Input(this.selectedCharacter) chosenCharacter: any;
  characterToDisplay: Character;
  private storage;
  // set name(name: string) {
  //   this._name = (name && name.trim()) || '<no name set>';
  // }

  @Input()
  get selectedCharacter(): Character { return this.selectedCharacter; }

  // charactersEmit() {
  // }
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private characterService: CharacterService
  ) { }

  ngOnInit() {
    this.storage = this.characterService.getCharacters();
    console.log(this.chosenCharacter);
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
                                      dataLastEmittedFromObserver.gold)
   })
  }

}

console.log(this.selectedCharacter);
