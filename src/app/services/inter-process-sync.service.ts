import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EventResponse } from '../../../electron/src/common/event-response';

@Injectable({
  providedIn: 'root'
})
export class InterProcessSyncService {
  private interProcessSource = new BehaviorSubject<EventResponse>(null);
  interProcessMessage = this.interProcessSource.asObservable();

  constructor() { }

  changeInterProcessResponse(response: EventResponse): void {
    this.interProcessSource.next(response);
  }
}
