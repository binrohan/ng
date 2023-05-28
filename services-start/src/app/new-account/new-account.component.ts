import { Component, EventEmitter, Output } from '@angular/core';
import { AccountServiceService } from '../account-service/account-service.service';
import { LoggingService } from '../logging/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {
  constructor(private logService: LoggingService, private accountService: AccountServiceService){
    this.accountService.statusUpdate.subscribe(
      (status: string) => this.statusChangeAlert(`New Status ${status}`)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
    // this.logService.logStatusChange(accountStatus);
  }

  statusChangeAlert(message: string){
    alert(message);
  }
}
