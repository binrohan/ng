import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clicks : Date[] = [];
  displayPassword = false;
  constructor() {
    
  }

  ngOnInit(): void {
  }

  onClickDetails(){
    this.displayPassword = !this.displayPassword;
    this.clicks.push(new Date());
  }
}
