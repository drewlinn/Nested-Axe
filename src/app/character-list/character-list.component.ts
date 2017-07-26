import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
// import { CharacterDetailComponent } from '../character-detail/character-detail.component';

import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
  providers: [CharacterService]
})
export class CharacterListComponent implements OnInit {
  characters: FirebaseListObservable<any[]>;
  @Input() selectedCharacter;
  // @Output() charactersEmit = new EventEmitter<any>();
  characterToPlay: Character;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private characterService: CharacterService) {}

  ngOnInit(){
    this.characters = this.characterService.getCharacters();
  }

  goToDetailPage(clickedCharacter) {
    this.router.navigate(['characters', clickedCharacter.$key]);
  }

}
