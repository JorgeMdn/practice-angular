import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { Alert } from '@app/utils/helpers';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private readonly zone: NgZone) {}

  handleError(error: Error): void {
    this.zone.run(() => Alert.error(error.message || 'Undefined client error'));
    console.error('Error from global error handler', error);
  }
}
