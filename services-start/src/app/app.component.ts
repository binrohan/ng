import { Component, OnInit } from '@angular/core';
import { AccountServiceService } from './account-service/account-service.service';
import { AccountComponent } from './account/account.component';
import { LoggingService } from './logging/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // providers: [AccountServiceService]
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor(private accountService: AccountServiceService){}

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
}
