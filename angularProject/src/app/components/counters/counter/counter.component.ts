import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  title: string = 'Counter App';
  number: number = 10;
  base: number = 5;

  count(value: number): void {
    this.number = this.number + value
    console.log(this.number)
  }
}
