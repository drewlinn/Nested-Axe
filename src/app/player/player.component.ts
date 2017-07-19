import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
  providers: [CharacterService]
})
export class PlayerComponent implements OnInit {

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }


}
