import {Component, EventEmitter, OnChanges, Output, SimpleChange, SimpleChanges} from '@angular/core';
import {AccountService} from "../shared/account.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService, AccountService] <- declaring the AccountService here would create another instance of the service, breaking the app
})
export class NewAccountComponent {

  constructor(private accountService: AccountService) {
    this.accountService.onStatusUpdated.subscribe((status: string) => {
      alert("Status changed: " + status);
    });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount({name: accountName, status: accountStatus});
  }

}
