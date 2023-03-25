import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Characters } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add-characters',
  templateUrl: './add-characters.component.html',
  styleUrls: ['./add-characters.component.css']
})
export class AddCharactersComponent {
 
  constructor(private dbzService:DbzService){

  }
  @Input()
  newCharacter:Characters={
    name:'',
    power:0
  }
  // changeName(event:any){
  //   console.log(event.target.value)
  // }
  // @Output()
  // onNewCharacter:EventEmitter<Characters>= new EventEmitter;

  addSubmitForm(){
    if(this.newCharacter.name.trim().length===0){
      return;
    }
    // this.onNewCharacter.emit(this.newCharacter)
    this.dbzService.addCharacter(this.newCharacter)
      this.newCharacter={
        name:'',
        power:0
      }
  }
}
