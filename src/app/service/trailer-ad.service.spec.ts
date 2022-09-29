import { TestBed } from '@angular/core/testing';

import { TrailerAdService } from './trailer-ad.service';

describe('TrailerAdService', () => {
  let service: TrailerAdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrailerAdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
