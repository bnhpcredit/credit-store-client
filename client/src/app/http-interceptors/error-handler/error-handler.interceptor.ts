import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if(error.error instanceof ErrorEvent) {
            console.warn('Client Side Error!');
            errorMsg = `Error: ${error.error.message}`
          } else {
            console.warn('Backend Error!');
            errorMsg = `Backend returned code ${error.status}, Message: ${error.message}`;
          }
          console.error(errorMsg);
          return throwError(error);
        })
      );
  }
}
