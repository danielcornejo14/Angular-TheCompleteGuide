import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', property <div app-servers></div>
  // selector: '.app-servers', class <div class="app-servers"></div>
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true
    },2000)
   }

  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName: string = '';

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created'
  }

  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value
  }

}
