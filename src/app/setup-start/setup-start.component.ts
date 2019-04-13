import { Component, OnInit } from '@angular/core';
import { InterProcessCommunicationService } from '../services/inter-process-communication.service';
import { InterProcessSyncService } from '../services/inter-process-sync.service';
import { AppEvent } from '../common/app-event'
import { EventResponse } from '../common/event-response';

@Component({
  selector: 'app-setup-start',
  templateUrl: './setup-start.component.html',
  styleUrls: ['./setup-start.component.scss']
})
export class SetupStartComponent implements OnInit {

  message: EventResponse

  constructor(
    private ipcs: InterProcessCommunicationService,
    private ips: InterProcessSyncService,
  ) { }

  ngOnInit() {
    this.ips.interProcessMessage.subscribe((message: EventResponse) => {
      this.message = message
    })
  }

  selectWorkDir(): void {
    this.ipcs.sendEvent(AppEvent.SELECT_WORK_DIR)
  }
}
