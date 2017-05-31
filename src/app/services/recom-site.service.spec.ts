import { TestBed, inject } from '@angular/core/testing';

import { RecomSiteService } from './recom-site.service';

describe('RecomSiteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecomSiteService]
    });
  });

  it('should ...', inject([RecomSiteService], (service: RecomSiteService) => {
    expect(service).toBeTruthy();
  }));
});
