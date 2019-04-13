import { Component, OnInit } from '@angular/core';
import { InterProcessCommunicationService } from '../services/inter-process-communication.service';
import { InterProcessSyncService } from '../services/inter-process-sync.service';
import { AppEvent } from '../common/app-event'
import { EventResponse } from '../common/event-response';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-setup-start',
  templateUrl: './setup-start.component.html',
  styleUrls: ['./setup-start.component.scss']
})
export class SetupStartComponent implements OnInit {

  message: EventResponse
  selectedWorkDir: string = null

  constructor(
    private ipcs: InterProcessCommunicationService,
    private ips: InterProcessSyncService,
  ) { }

  ngOnInit() {
    this.ips.interProcessMessage
      .pipe(
        filter((message: EventResponse) => message != null && message.event == AppEvent.SELECT_WORK_DIR)
      )
      .subscribe((message: EventResponse) => {
        if (message.successful) {
          this.selectedWorkDir = message.value
        } else {
          this.selectedWorkDir = null
        }
        this.message = message
      })
  }

  selectWorkDir(): void {
    this.ipcs.sendEvent(AppEvent.SELECT_WORK_DIR)
  }
}
