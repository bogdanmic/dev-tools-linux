import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigSyncService {
  private workDirSource = new BehaviorSubject<string>(null);
  workDirMessage = this.workDirSource.asObservable();

  constructor() { }

  changeWorkDir(workDir: string): void {
    this.workDirSource.next(workDir)
  }
}
