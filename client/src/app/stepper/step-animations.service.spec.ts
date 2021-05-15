import { TestBed } from '@angular/core/testing';

import { StepAnimationsService } from './step-animations.service';

describe('StepAnimationsService', () => {
  let service: StepAnimationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StepAnimationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
