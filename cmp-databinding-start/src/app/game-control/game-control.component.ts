import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  @Output() frameEmitted = new EventEmitter<number>();
  intervalRef: any;
  constructor() {}

  ngOnInit(): void {}

  onStart() {
    let frame = 0;
    this.intervalRef = setInterval(() => {
      this.frameEmitted.emit(frame++);
    }, 2000);
  }

  onStop() {
    clearInterval(this.intervalRef);
  }
}
