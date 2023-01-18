import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class LoggingService {
  logStatusChange(newStatus: string) {
    console.log('A server status changed, new status: ' + newStatus);
  }
}
