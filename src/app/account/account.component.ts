import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AccountService} from "../shared/account.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingService, AccountService] <- declaring the AccountService here would create another instance of the service, breaking the app
})

export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private accountService: AccountService) {
  }

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
  }
}
