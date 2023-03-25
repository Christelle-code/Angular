import { Component } from '@angular/core';
import { Characters } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  characters:Characters[]=[
    {
      name:'Goku',
      power:15000
    },
    {
      name:'Vegeta',
      power:7500
    }
  ];
  newCharacter:Characters={
    name:'Maestro Roshi',
    power:1000
  }

  

}
