import { TestBed, inject } from '@angular/core/testing';

import { AppMiscService } from './app-misc.service';

describe('AppMiscService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppMiscService]
    });
  });

  it('should ...', inject([AppMiscService], (service: AppMiscService) => {
    expect(service).toBeTruthy();
  }));
});
