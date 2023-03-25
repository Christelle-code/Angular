import { Component, Input } from '@angular/core';
import { Characters } from '../interfaces/dbz.interfaces';
@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {
  @Input('characterList')
  characters:Characters[]=[]
}
