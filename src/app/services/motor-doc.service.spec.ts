import { TestBed } from '@angular/core/testing';

import { MotorDocService } from './motor-doc.service';

describe('MotorDocService', () => {
  let service: MotorDocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MotorDocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
