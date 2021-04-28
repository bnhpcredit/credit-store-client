import { TestBed } from '@angular/core/testing';

import { CreditOtpService } from './credit-otp.service';

describe('CreditOtpService', () => {
  let service: CreditOtpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreditOtpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
