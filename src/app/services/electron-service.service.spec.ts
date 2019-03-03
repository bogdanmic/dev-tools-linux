import { TestBed } from '@angular/core/testing';

import { ElectronServiceService } from './electron.service';

describe('ElectronServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ElectronServiceService = TestBed.get(ElectronServiceService);
    expect(service).toBeTruthy();
  });
});
