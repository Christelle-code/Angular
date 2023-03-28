import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  heroesList: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor']
  deletedHero: string = '';
  deleteHero() {
    this.deletedHero = this.heroesList.shift() || '';
  }
}
