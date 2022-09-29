import { TestBed } from '@angular/core/testing';

import { PartsAdService } from './parts-ad.service';

describe('PartsAdService', () => {
  let service: PartsAdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartsAdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
