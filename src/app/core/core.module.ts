import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule, Optional, SkipSelf } from '@angular/core';
import { GlobalErrorHandler } from './handlers/global-error/global-error.handler';
import { HttpErrorInterceptor } from './interceptors/http-error/http-error.interceptor';
import { HttpJwtInterceptor } from './interceptors/http-jwt/http-jwt.interceptor';
import { ProgressModule } from './modules/progress';

const SERVICES = [];

@NgModule({
  declarations: [],
  imports: [CommonModule, ProgressModule.forRoot(), HttpClientModule],
  exports: [ProgressModule],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    { provide: HTTP_INTERCEPTORS, useClass: HttpJwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    SERVICES,
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule has already been loaded. Import CoreModule in the AppModule only.');
    }
  }
}
