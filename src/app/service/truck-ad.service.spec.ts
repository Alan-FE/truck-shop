import { TestBed } from '@angular/core/testing';

import { TruckAdService } from './truck-ad.service';

describe('TruckAdService', () => {
  let service: TruckAdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TruckAdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
