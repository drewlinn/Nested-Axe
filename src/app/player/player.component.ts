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
  arraysone: any = [];

  constructor(private characterService: CharacterService) { }

  ngOnInit() {}

  pushThis(string) {
    let array = this.arraysone;
    array.push(string);
  }
  popLockItDropIt() {
    let array = this.arraysone;
    this.charisma = 1;
    this.dexterity = 1;
    this.intelligence = 1;
    this.strength = 1;

    console.log(this.charisma);

    for(var i = 0; i <= array.length + 2; i++){
      array.pop();
    }
  }

  submitForm(name: string, gender: string, charisma: number, dexterity: number, intelligence: number, strength: number) {

    var x = document.forms["addPerson"];
    var i;
    for (i = 0; i < x.length ;i++) {
      //  console.log(x.elements[i].checked);
       if((x.elements[i].checked === true) && (x.elements[i].value === 'char')) {
        //  this.arrays.push();
        let chars = 'char';
        this.pushThis(chars);
        // console.log(this.arraysone);
      } else if ((x.elements[i].checked === true) && (x.elements[i].value === 'dex')) {
        let dex = 'dex';
        this.pushThis(dex);
      } else if ((x.elements[i].checked === true) && (x.elements[i].value === 'intel')) {
        let intel = 'intel';
        this.pushThis(intel);
      } else if ((x.elements[i].checked === true) && (x.elements[i].value === 'strength')) {
        let strength = 'strength';
        this.pushThis(strength);
      }

    }
    for(var j = 0; j < this.arraysone.length; j++){

      if(this.arraysone[j] === 'char') {

        this.charisma += 1;
        console.log(charisma);

      } else if(this.arraysone[j] === 'dex') {

        this.dexterity += 1;

      } else if(this.arraysone[j] === 'intel') {

        this.intelligence += 1;

      } else if(this.arraysone[j] === 'strength') {

        this.strength += 1;

      }
    }

    var newCharacter: Character = new Character(name, gender, this.charisma, this.dexterity, this.intelligence, this.strength);
    this.characterService.addCharacter(newCharacter);
    console.log(newCharacter);

    this.popLockItDropIt();
    console.log(this.charisma);

  }

}
