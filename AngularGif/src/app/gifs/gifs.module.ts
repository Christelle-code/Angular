import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearchGifComponent } from './search-gif/search-gif.component';
import { ResponseGifComponent } from './response-gif/response-gif.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearchGifComponent,
    ResponseGifComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GifsPageComponent
  ]
})
export class GifsModule { }
