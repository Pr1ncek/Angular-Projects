import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {

  myInterval; 
  counterValue = 0;

  @Output()
  counterIncrement = new EventEmitter<{
    counterValue: number;
  }>();

  @Output()
  counterStopped = new EventEmitter<{}>();

  constructor() {}

  ngOnInit() {}

  onStartCounter(){
    this.myInterval = setInterval(() => {
      console.log("Counter: " + this.counterValue);
      this.counterIncrement.emit({counterValue: this.counterValue++});
    }, 1000);; 
  }

  onStopCounter(){
    clearInterval(this.myInterval);
    this.counterValue = 0;
    this.counterStopped.emit({});
  }
}
