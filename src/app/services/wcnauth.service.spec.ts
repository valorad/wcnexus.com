import { TestBed, inject } from '@angular/core/testing';

import { WcnauthService } from './wcnauth.service';

describe('WcnauthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WcnauthService]
    });
  });

  it('should ...', inject([WcnauthService], (service: WcnauthService) => {
    expect(service).toBeTruthy();
  }));
});
