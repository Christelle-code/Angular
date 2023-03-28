import { Component, Input } from '@angular/core';
import { Characters } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  constructor(private dbzService:DbzService){

  }
  // @Input('characterList')
  get characterList():Characters[]{
    return this.dbzService.characters;
  }
}
