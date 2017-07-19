import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { Character } from '../character.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  providers: [CharacterService]
})
export class PlayerComponent implements OnInit {

  charisma: number = 1;
  dexterity: number = 1;
  intelligence: number = 1;
  strength: number = 1;
  checkFirst: boolean = true;
  checkSecond: boolean = true;
  checkThird: boolean = true;
  checkFourth: boolean = true;


  constructor(private characterService: CharacterService) { }

  addChar() {
    this.charisma += 1;
  }

  addDex() {
    this.dexterity += 1;
  }

  addInt() {
    this.intelligence += 1;
  }

  addStr() {
    this.strength += 1;
  }

  ngOnInit() {
  }


  submitForm(name: string, gender: string, charisma: number, dexterity: number, intelligence: number, strength: number) {

    var newCharacter: Character = new Character(name, gender, charisma, dexterity, intelligence, strength);
    this.characterService.addCharacter(newCharacter);
    console.log(newCharacter);
  }
}
