import { TestBed } from '@angular/core/testing';

import { DriverArrayService } from './driver-array.service';

describe('DriverArrayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DriverArrayService = TestBed.get(DriverArrayService);
    expect(service).toBeTruthy();
  });
});
