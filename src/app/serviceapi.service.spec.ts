import { TestBed } from '@angular/core/testing';

import { Serviceapi } from './serviceapi.service';

describe('ServiceapiService', () => {
  let service: Serviceapi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serviceapi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
