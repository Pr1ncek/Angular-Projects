import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles: [
    `
    .online {
        color: white
    }
  `
  ]
})
export class ServerComponent {
  serverID: number = 100;
  serverStatus: string = "Offline";

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "Online" : "Offline";
  }

  getServerID() {
    return this.serverID;
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === "Online" ? "green" : "red";
  }
}
