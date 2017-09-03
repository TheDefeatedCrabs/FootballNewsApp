import { TestBed, inject } from '@angular/core/testing';

import { LiveEventsService } from './live-events.service';

describe('LiveEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LiveEventsService]
    });
  });

  it('should be created', inject([LiveEventsService], (service: LiveEventsService) => {
    expect(service).toBeTruthy();
  }));
});
