import { TestBed } from '@angular/core/testing';

import { InactiveAdsService } from './inactive-ads.service';

describe('InactiveAdsService', () => {
  let service: InactiveAdsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InactiveAdsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
