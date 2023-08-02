import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SponsoredsService } from './sponsoreds.service';

describe('SponsoredsService', () => {
  let service: SponsoredsService;
  let httpCtrl: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(SponsoredsService);
    httpCtrl = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return sponsoreds from Http Get call.', () => {
    const getAction = service.getSponsoreds()
    expect(getAction).toBeTruthy();
  }); 
});


