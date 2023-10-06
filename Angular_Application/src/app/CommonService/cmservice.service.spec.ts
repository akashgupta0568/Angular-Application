import { TestBed } from '@angular/core/testing';

import { CMServiceService } from './cmservice.service';

describe('CMServiceService', () => {
  let service: CMServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CMServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
