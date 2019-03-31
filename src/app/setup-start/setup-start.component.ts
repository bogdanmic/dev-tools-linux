import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../services/electron.service';
import { InterProcessCommunicationService } from '../services/inter-process-communication.service';
import { InterProcessSyncService } from '../services/inter-process-sync.service';

@Component({
  selector: 'app-setup-start',
  templateUrl: './setup-start.component.html',
  styleUrls: ['./setup-start.component.scss']
})
export class SetupStartComponent implements OnInit {

  txtMsg: string

  constructor(
    private ipc: ElectronService,
    private ipcs: InterProcessCommunicationService,
    private ips: InterProcessSyncService,
  ) { }

  ngOnInit() {
    this.ips.changeInterProcess("Nothing to do")
    this.ips.interProcessMessage.subscribe(message => {
      this.txtMsg = message
    })
  }

  doSomething(): void {
    console.log("I'm doing something")
    console.log(this.ipc.isLinux)
    console.log(this.ipc.isX64)
    console.log(this.ipc.isX86)
    this.ipcs.callMainProcess()
  }

}
