import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorizationGuard } from './authorization.guard';
import { CoreModule } from './core/core.module';
import { getEsPaginatorIntl } from './utils/helpers';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [
    AuthorizationGuard,
    { provide: LOCALE_ID, useValue: 'es-MX' },
    { provide: MatPaginatorIntl, useValue: getEsPaginatorIntl() },
    { provide: LocationStrategy, useClass: PathLocationStrategy }, // con esto eliminamos el signo de gato a las rutas
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
