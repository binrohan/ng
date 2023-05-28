import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-success-alert",
  template: `<p>You are successful!</p>`,
  styles: [
    `
      p {
        padding: 20px;
        background-color: palegreen;
        border: 1px solid green;
      }
    `,
  ],
})
export class SuccessAlertComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
