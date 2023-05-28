import { Component, OnInit } from "@angular/core";
import { CountService } from "./services/count.service";
import { UserService } from "./services/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [UserService, CountService]
})
export class AppComponent{
  
}
