import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  activatedSub: Subscription;

  constructor(private userService: UserService) {}
  ngOnDestroy(): void {
    this.activatedSub.unsubscribe();
  }

  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe((didActivated: boolean)=>{
      this.userActivated = didActivated;
    });
  }
}
