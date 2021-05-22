import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alert } from '@app/utils/helpers';
import { Response } from '@app/utils/interfaces';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      map((ev: HttpEvent<any>) => {
        if (ev instanceof HttpResponse) {
          const body: Response<any> = ev.body;
          if (Object.keys(body).indexOf('success') > -1 && !body.success) {
            throw new HttpErrorResponse({
              error: { message: body.message },
              headers: ev.headers,
              status: 404,
              statusText: body.statusCode['code'],
              url: ev.url,
            });
          }
        }
        return ev;
      }),
      catchError((error: HttpErrorResponse) => {
        console.error('Error from error interceptor', error);
        Alert.error(
          error.error
            ? error.error.message
            : error.message || JSON.stringify(error),
          `${error.status}`
        );
        return throwError(error);
      })
    );
  }
}
