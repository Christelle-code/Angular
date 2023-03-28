import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifService:GifsService){

  }

  get history(){
    return this.gifService.history
    
  }
  search(item:string){
    this.gifService.addNewElementToHistory(item)
  }
}
