import { TestBed, inject } from '@angular/core/testing';

import { UpcomingService } from './upcoming.service';

describe('UpcomingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpcomingService]
    });
  });

  it('should ...', inject([UpcomingService], (service: UpcomingService) => {
    expect(service).toBeTruthy();
  }));
});
