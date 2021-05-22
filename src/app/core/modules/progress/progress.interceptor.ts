import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ProgressService } from './progress.service';

@Injectable()
export class ProgressInterceptor implements HttpInterceptor {
  private requests: number;
  constructor(private readonly progress: ProgressService) {
    this.requests = 0;
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.progress.setProgress(true);
    this.requests++;
    return next.handle(req).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            this.requests--;
            this.progress.setProgress(this.requests > 0);
          }
        },
        () => {
          this.requests--;
          this.progress.setProgress(this.requests > 0);
        }
      )
    );
  }
}
