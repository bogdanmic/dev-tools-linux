import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../services/electron.service';
import { MatSnackBar } from '@angular/material';
import { InterProcessSyncService } from '../services/inter-process-sync.service';
import { EventResponse } from '../../../electron/src/common/event-response';
import { ToastNotificationComponent } from '../toast-notification/toast-notification.component';
import { ConfigSyncService } from '../services/config-sync.service';

declare const window: any;

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {
  isLinux: boolean = false;
  isOnline: boolean = true;
  workDir: string = null;
  durationInSeconds: number = 4;

  constructor(
    private es: ElectronService,
    private snackBar: MatSnackBar,
    private ips: InterProcessSyncService,
    private configService: ConfigSyncService
  ) { }

  ngOnInit() {
    this.isLinux = this.es.isLinux;
    this.isOnline = navigator.onLine;
    window.addEventListener('online', () => {
      this.isOnline = navigator.onLine
    })
    window.addEventListener('offline', () => {
      this.isOnline = navigator.onLine
    })

    this.ips.interProcessMessage.subscribe((message: EventResponse) => {
      if (message && message.message) {
        // Display a desktop notifications
        Notification.requestPermission().then(function (result) {
          new Notification(
            message.successful ? 'Success' : 'Error',
            {
              body: message.message
            }
          )
        })

        this.snackBar.openFromComponent(ToastNotificationComponent, {
          data: message,
          duration: this.durationInSeconds * 1000,
        });
      }
    })

    this.configService.workDirMessage.subscribe((workDir: string) => this.workDir = workDir)
  }

}
