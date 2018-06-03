import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.css"]
})
export class DetailComponent implements OnInit {
  display: string = "inline";
  counter: number = 0;

  constructor() {}

  ngOnInit() {}

  setDisplay() {
    this.counter++;
    if (this.display === "none") this.display = "inline";
    else this.display = "none";
  }
}
