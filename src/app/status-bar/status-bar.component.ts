import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../services/electron.service';
import { MatSnackBar } from '@angular/material';
import { InterProcessSyncService } from '../services/inter-process-sync.service';
import { EventResponse } from '../common/event-response';
import { ToastNotificationComponent } from '../toast-notification/toast-notification.component';

declare const window: any;

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {
  isLinux: boolean = false;
  isOnline: boolean = true;
  durationInSeconds: number = 5;

  constructor(
    private es: ElectronService,
    private snackBar: MatSnackBar,
    private ips: InterProcessSyncService
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
      if (message) {
        this.snackBar.openFromComponent(ToastNotificationComponent, {
          data: message,
          duration: this.durationInSeconds * 1000,
        });
      }
    })
  }

}
