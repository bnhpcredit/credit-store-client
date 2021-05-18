import { TestBed } from '@angular/core/testing';

import { StatusHandlerInterceptor } from './status-handler.interceptor';

describe('StatusHandlerInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      StatusHandlerInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: StatusHandlerInterceptor = TestBed.inject(StatusHandlerInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
