import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { CharacterDetailComponent } from '../character-detail/character-detail.component';

import { Character } from '../character.model';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-scene01',
  templateUrl: './scene01.component.html',
  styleUrls: ['./scene01.component.scss'],
  providers: [CharacterService]
})
export class Scene01Component implements OnInit {
  characters: FirebaseListObservable<any[]>;
  @Input() selectedCharacter;
  characterToPlay: Character;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private characterService: CharacterService) { }

  ngOnInit() {
    this.characters = this.characterService.getCharacters();
  }

}
