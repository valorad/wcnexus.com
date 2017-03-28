import { TestBed, inject } from '@angular/core/testing';

import { WcnauthGuardService } from './wcnauth-guard.service';

describe('WcnauthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WcnauthGuardService]
    });
  });

  it('should ...', inject([WcnauthGuardService], (service: WcnauthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
