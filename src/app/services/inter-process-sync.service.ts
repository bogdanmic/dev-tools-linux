import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterProcessSyncService {
  private interProcessSource = new BehaviorSubject(null);
  interProcessMessage = this.interProcessSource.asObservable();

  constructor() { }

  changeInterProcess(message: string): void {
    this.interProcessSource.next(message);
  }
}
