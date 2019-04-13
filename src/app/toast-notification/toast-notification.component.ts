import { Component, OnInit, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { EventResponse } from '../common/event-response';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.scss']
})
export class ToastNotificationComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: EventResponse) { }

  ngOnInit() {
  }

}
