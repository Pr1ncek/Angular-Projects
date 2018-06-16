import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  numbers: number[] = []; 

  onCounterIncrement(counterValue: {counterValue: number}){
    console.log(counterValue.counterValue);
    console.log(this.numbers);
    this.numbers.push(counterValue.counterValue);
  }

  onCounterStopped(){
    this.numbers = [];
  }
}
