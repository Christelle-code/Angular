import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { CharactersComponent } from './characters/characters.component';
import { AddCharactersComponent } from './add-characters/add-characters.component';



@NgModule({
  declarations: [
    MainPageComponent,
    CharactersComponent,
    AddCharactersComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }

// FormsModule=>ngSubmit event
// two way data binding =>ngModel
//Components comunication with @Input
