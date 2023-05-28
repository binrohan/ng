import { Component, Input } from "@angular/core";
import { AccountServiceService } from "../account-service/account-service.service";
import { LoggingService } from "../logging/logging.service";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(
    private loggingService: LoggingService,
    private accountService: AccountServiceService
  ) {}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountService.statusUpdate.emit(status);
  }
}
