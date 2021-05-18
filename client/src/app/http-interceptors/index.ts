import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { ApiGatewayInterceptor } from './api-gateway/api-gateway.interceptor';
import { ErrorHandlerInterceptor } from './error-handler/error-handler.interceptor';
import { StatusHandlerInterceptor } from './status-handler/status-handler.interceptor';

/** Http interceptor providers in outside-in order */
export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: ApiGatewayInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true},
  { provide: HTTP_INTERCEPTORS, useClass: StatusHandlerInterceptor, multi: true}
];