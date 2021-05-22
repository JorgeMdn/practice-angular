import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '@app/utils/helpers/auth';
import { Observable } from 'rxjs';

@Injectable()
export class HttpJwtInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!request.url.includes('/login')) {
      if (Auth.checkSession()) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${Auth.getSession().token}`,
          },
        });
      }
    }
    return next.handle(request);
  }
}
