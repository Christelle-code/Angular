import { Component, Input } from '@angular/core';
import { Characters } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-add-characters',
  templateUrl: './add-characters.component.html',
  styleUrls: ['./add-characters.component.css']
})
export class AddCharactersComponent {
  @Input('charactersArray')
  characters:Characters[]=[]
  @Input()
  newCharacter:Characters={
    name:'',
    power:0
  }
  // changeName(event:any){
  //   console.log(event.target.value)
  // }
  addSubmitForm(){
    if(this.newCharacter.name.trim().length===0){
      return;
    }
      this.characters.push(this.newCharacter)
      this.newCharacter={
        name:'',
        power:0
      }
  }
}
