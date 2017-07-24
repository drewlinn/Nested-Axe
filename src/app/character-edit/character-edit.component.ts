import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-edit',
  templateUrl: './character-edit.component.html',
  styleUrls: ['./character-edit.component.scss'],
  providers: [CharacterService]
})
export class CharacterEditComponent implements OnInit {
  @Input() selectedCharacter;

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
  }

  beginUpdatingCharacter(characterToUpdate){
    this.characterService.updateCharacter(characterToUpdate);
  }

  beginDeletingCharacter(characterToDelete){
    if(confirm("Are you sure you want to delete this character from the character list?")){
      this.characterService.deleteCharacter(characterToDelete);
    }
  }

}
