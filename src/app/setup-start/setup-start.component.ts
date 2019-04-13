import { Component, OnInit } from '@angular/core';
import { InterProcessCommunicationService } from '../services/inter-process-communication.service';
import { InterProcessSyncService } from '../services/inter-process-sync.service';
import { AppEvent } from '../common/app-event'
import { EventResponse } from '../common/event-response';
import { filter } from 'rxjs/operators';
import { ConfigSyncService } from '../services/config-sync.service';

@Component({
  selector: 'app-setup-start',
  templateUrl: './setup-start.component.html',
  styleUrls: ['./setup-start.component.scss']
})
export class SetupStartComponent implements OnInit {

  message: EventResponse
  selectedWorkDir: string = null
  showStart: boolean = false

  constructor(
    private ipcs: InterProcessCommunicationService,
    private ips: InterProcessSyncService,
    private configService: ConfigSyncService,
  ) { }

  ngOnInit() {
    this.ips.interProcessMessage
      .pipe(
        filter((message: EventResponse) => message != null && message.event == AppEvent.SELECT_WORK_DIR)
      )
      .subscribe((message: EventResponse) => {
        if (message.successful) {
          this.selectedWorkDir = message.value
          // Because we selected a good directory we can start the install process
          this.showStart = true
        } else {
          this.selectedWorkDir = null
        }
        this.message = message
        // Send the selected working directory
        this.configService.changeWorkDir(this.selectedWorkDir)
      })
  }

  selectWorkDir(): void {
    this.ipcs.sendEvent(AppEvent.SELECT_WORK_DIR)
  }

  initWorkDir(): void {
    this.ipcs.sendEventData(AppEvent.INIT_WORK_DIR, this.selectedWorkDir)
  }
}
