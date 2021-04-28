import { TestBed } from '@angular/core/testing';

import { ApiGatewayInterceptor } from './api-gateway.interceptor';

describe('ApiGatewayInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ApiGatewayInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ApiGatewayInterceptor = TestBed.inject(ApiGatewayInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
