import { Injectable } from '@angular/core';
import { ElectronService } from './electron.service';
import { InterProcessSyncService } from './inter-process-sync.service';

declare let Zone: any;

@Injectable({
  providedIn: 'root'
})
export class InterProcessCommunicationService {

  private currentZone: any;

  constructor(private ipc: ElectronService, private ips: InterProcessSyncService) {
    this.currentZone = Zone.current;
    this.ipc.ipcRenderer.on('do-something', (event, args: string) => {
      console.log("Done")
      // For some reason this is behind by one event. Strange.
      // That is caused beucase the response of the on is not in the same zone
      // A zone is some kind of angular thing. Fixed it with the help of:
      // https://github.com/angular/zone.js/issues/537
      this.currentZone.run(() => { this.ips.changeInterProcess(args) })
    })
  }

  callMainProcess(): void {
    if (this.ipc.ipcRenderer) {
      this.ipc.ipcRenderer.send('do-something')
    }
  }
}
