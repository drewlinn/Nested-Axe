import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Character } from '../character.model';
import { CharacterService } from '../character.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  providers: [CharacterService]
})
export class CharacterComponent implements OnInit {
  characterId: string;
  activeCharacter: Character;

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
     this.activeCharacter = new Character(dataLastEmittedFromObserver.name,
                                      dataLastEmittedFromObserver.gender,
                                      dataLastEmittedFromObserver.charisma,
                                      dataLastEmittedFromObserver.dexterity,
                                      dataLastEmittedFromObserver.intelligence,
                                      dataLastEmittedFromObserver.strength,
                                      dataLastEmittedFromObserver.inventory,
                                      dataLastEmittedFromObserver.gold,
                                      dataLastEmittedFromObserver.scene)
                                      console.log();
   })
  }
}
