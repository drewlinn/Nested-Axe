import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response } from '@angular/http';

@Injectable()
export class CharacterService {
  characters: FirebaseListObservable<any[]>;
  characterId: string;
  characterToDisplay: Character;

  constructor(private http: Http, private database: AngularFireDatabase, private route: ActivatedRoute ) {
    this.characters = database.list('characters');
  }

  getCharacters() {
  return this.characters;
  }

  addCharacter(newCharacter: Character){
    this.characters.push(newCharacter);
  }

  getCharacterById(characterId: string) {
    return this.database.object('characters/' + characterId);
  }

  updateCharacter(localUpdatedCharacter){
    var characterEntryInFirebase = this.getCharacterById(localUpdatedCharacter.$key);
    characterEntryInFirebase.update({name: localUpdatedCharacter.name,
                                gender: localUpdatedCharacter.gender,
                                charisma: localUpdatedCharacter.charisma,
                                dexterity: localUpdatedCharacter.dexterity,
                                intelligence: localUpdatedCharacter.intelligence,
                                strength: localUpdatedCharacter.strength,
                                inventory: localUpdatedCharacter.inventory,
                                gold: localUpdatedCharacter.gold,
                                scene: localUpdatedCharacter.scene});
  }
  getCharacter(key) {
    return this.http.get("https://chooseyour-own-adventure.firebaseio.com/characters/" + key + ".json?print=pretty");

  }

  deleteCharacter(localCharacterToDelete){
    var characterEntryInFirebase = this.getCharacterById(localCharacterToDelete.$key);
    characterEntryInFirebase.remove();
  }

  
}
