import { Component } from '@angular/core';
import { Gif } from '../interfaces/gif.interface';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-response-gif',
  templateUrl: './response-gif.component.html',
  styleUrls: ['./response-gif.component.css']
})
export class ResponseGifComponent {
  constructor(private gifService:GifsService){

  }
  get response():Gif[]{
    return this.gifService.response
  }
}
