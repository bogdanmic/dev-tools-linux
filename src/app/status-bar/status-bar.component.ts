import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../services/electron.service';

declare const window: any;

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {
  isLinux: boolean = false;
  isOnline: boolean = true;

  constructor(private es: ElectronService) { }

  ngOnInit() {
    this.isLinux = this.es.isLinux;
    this.isOnline = navigator.onLine;
    window.addEventListener('online', () => {
      this.isOnline = navigator.onLine
    })
    window.addEventListener('offline', () => {
      this.isOnline = navigator.onLine
    })
  }

}
