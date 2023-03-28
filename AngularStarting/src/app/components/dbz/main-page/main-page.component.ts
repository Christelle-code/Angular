import { Component } from '@angular/core';
import { Characters } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  
  
  newCharacter:Characters={
    name:'Maestro Roshi',
    power:1000
  }


  

}
