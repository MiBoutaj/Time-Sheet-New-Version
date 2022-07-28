import { TestBed } from '@angular/core/testing';

import { BdmaSeviceService } from './bdma-sevice.service';

describe('BdmaSeviceService', () => {
  let service: BdmaSeviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BdmaSeviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
