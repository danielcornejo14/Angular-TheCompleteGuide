import { Injectable, EventEmitter} from "@angular/core";
import { LogginService } from "./logging.service";


@Injectable({
    providedIn: 'root'
})
export class AccountsService{

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

    statusUpdated = new EventEmitter<string>();

    constructor(private loggingService: LogginService){}

/**
 * The addAcount function takes two arguments, name and status, and pushes an object with the name and
 * status properties to the accounts array.
 * @param {string} name - string, status: string
 * @param {string} status - string
 */
    addAcount(name: string, status: string){
        this.accounts.push({name: name, status: status})
        this.loggingService.logStatusChange(status)
    }

    updateStatus(id: number, status: string){
        this.accounts[id].status = status
        this.loggingService.logStatusChange(status)

    }

}