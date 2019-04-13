import { TestBed } from '@angular/core/testing';

import { ConfigSyncService } from './config-sync.service';

describe('ConfigSyncService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigSyncService = TestBed.get(ConfigSyncService);
    expect(service).toBeTruthy();
  });
});
