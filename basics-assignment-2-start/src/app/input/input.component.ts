import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  userName = 'Ava C';
  isNameEmpty = false;

  constructor() { }

  ngOnInit() {
  }

  onUpdateEraseButton(){
    if(this.userName === '' || this.userName === ' '){
      this.isNameEmpty = true;
    }else{
      this.isNameEmpty = false;
    }
  }

  resetName(){
    this.userName = '';
    this.isNameEmpty = true;
  }


}
