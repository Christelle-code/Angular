import { Injectable } from '@angular/core';
import { Characters } from '../interfaces/dbz.interfaces';

@Injectable()
export class DbzService {

  constructor() {
    console.log("hello")
  }

  private _characters: Characters[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];
    //the spred operator creates a new array, doesn't allow to modify the existing one
  get characters():Characters[]{
    return [...this._characters];
  }

  addCharacter(character:Characters){
    this._characters.push(character)
  }
}
