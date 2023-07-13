import { TestBed } from '@angular/core/testing';

import { SponsoredsService } from './sponsoreds.service';

describe('SponsoredsService', () => {
  let service: SponsoredsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SponsoredsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
