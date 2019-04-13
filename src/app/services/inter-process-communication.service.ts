import { Injectable } from '@angular/core';
import { ElectronService } from './electron.service';
import { InterProcessSyncService } from './inter-process-sync.service';
import { AppEvent, MainEvent } from '../common/app-event';
import { EventResponse } from '../common/event-response';
import { AppEventPayload } from '../common/app-event-payload';

declare let Zone: any;

@Injectable({
  providedIn: 'root'
})
export class InterProcessCommunicationService {

  private currentZone: any;

  constructor(private ipc: ElectronService, private ips: InterProcessSyncService) {
    this.currentZone = Zone.current;

    this.ipc.ipcRenderer.on(MainEvent.INTER_PROCESS_EVENT, (event, args: EventResponse) => {
      // For some reason this is behind by one event. Strange.
      // That is caused because the response of the on is not in the same zone
      // A zone is some kind of angular thing. Fixed it with the help of:
      // https://github.com/angular/zone.js/issues/537
      this.currentZone.run(() => { this.ips.changeInterProcessResponse(EventResponse.fromJSON(args)) })
    })
  }

  sendEvent(event: AppEvent): void {
    if (this.ipc.ipcRenderer) {
      this.ipc.ipcRenderer.send(MainEvent.INTER_PROCESS_EVENT, new AppEventPayload(event, null))
    }
  }

  sendEventData(event: AppEvent, data: any): void {
    if (this.ipc.ipcRenderer) {
      this.ipc.ipcRenderer.send(MainEvent.INTER_PROCESS_EVENT, new AppEventPayload(event, data))
    }
  }
}
