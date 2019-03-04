import { TestBed } from '@angular/core/testing';

import { InterProcessCommunicationService } from './inter-process-communication.service';

describe('InterProcessCommunicationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterProcessCommunicationService = TestBed.get(InterProcessCommunicationService);
    expect(service).toBeTruthy();
  });
});
