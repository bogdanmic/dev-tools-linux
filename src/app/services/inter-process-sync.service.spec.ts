import { TestBed } from '@angular/core/testing';

import { InterProcessSyncService } from './inter-process-sync.service';

describe('InterProcessSyncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterProcessSyncService = TestBed.get(InterProcessSyncService);
    expect(service).toBeTruthy();
  });
});
