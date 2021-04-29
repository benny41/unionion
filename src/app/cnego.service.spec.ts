import { TestBed } from '@angular/core/testing';

import { CnegoService } from './cnego.service';

describe('CnegoService', () => {
  let service: CnegoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CnegoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
