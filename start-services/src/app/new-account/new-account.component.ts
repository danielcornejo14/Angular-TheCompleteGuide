import { Component} from '@angular/core';
import { AccountsService } from '../account.service';
import { LogginService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LogginService]
})
export class NewAccountComponent {

  constructor(private loggingService: LogginService,
    private accountsService: AccountsService){
      this.accountsService.statusUpdated.subscribe(status => alert(status))
    }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAcount(accountName, accountStatus)
    // this.loggingService.logStatusChange(accountStatus);

  }
}
