import { Injectable } from '@angular/core';
import { Character } from './character.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Http } from '@angular/http';

@Injectable()
export class CharacterService {
  characters: FirebaseListObservable<any[]>;

  constructor(private http: Http,private database: AngularFireDatabase) {
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
                                gold: localUpdatedCharacter.gold});
  }
  getCharacter(key) {
    return this.http.get("https://chooseyour-own-adventure.firebaseio.com/characters/" + key + ".json?print=pretty");

  }

  deleteCharacter(localCharacterToDelete){
    var characterEntryInFirebase = this.getCharacterById(localCharacterToDelete.$key);
    characterEntryInFirebase.remove();
  }
}
