import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search-gif',
  templateUrl: './search-gif.component.html',
  styleUrls: ['./search-gif.component.css']
})
export class SearchGifComponent {

  constructor(private gifsService:GifsService){}

  @ViewChild('txtSearching') txtSearch!:ElementRef<HTMLInputElement>
  search(){
   const value=this.txtSearch.nativeElement.value;
   this.gifsService.addNewElementToHistory(value);
  
   console.log(value)
   this.txtSearch.nativeElement.value=''
  }
 
}
