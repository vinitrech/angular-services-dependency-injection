// Services can are hierarchy injected, all children of the injected element will have the same instance of the service
// Services can be global by being declared in AppModule, therefore can be injected into other services, for example

import {LoggingService} from "./loggin.service";
import {Injectable} from "@angular/core";

@Injectable() // Services need to have some metadata to be injectable, this is what this decorator does
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggingService: LoggingService) {
  }

  addAcount(newAccount: { name: string, status: string }) {
    this.accounts.push(newAccount)
    this.loggingService.logStatusChange(newAccount.status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status
    this.loggingService.logStatusChange(status);
  }
}
