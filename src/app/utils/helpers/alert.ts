import { from, Observable } from 'rxjs';
import Swal, { SweetAlertIcon, SweetAlertResult } from 'sweetalert2';

export interface AlertExtendedConfig extends AlertConfig {
  icon: SweetAlertIcon;
}

export interface AlertConfig {
  acceptText?: string;
  cancelText?: string;
  isHTML?: boolean;
  time?: number | null;
  showConfirmButton?: boolean;
}

export class Alert {
  private static CANCEL_TEXT = 'CANCELAR';
  private static ACCEPT_TEXT = 'ACEPTAR';

  static success(message: string, title: string = 'Éxito', config?: AlertConfig): Observable<SweetAlertResult> {
    return Alert.alert(title, message || null, {
      icon: 'success',
      acceptText: config ? config.acceptText || null : null,
      cancelText: config ? config.cancelText || null : null,
      isHTML: config ? config.isHTML || false : false,
      time: config ? config.time || null : null,
      showConfirmButton: config ? config.showConfirmButton : false,
    });
  }

  static error(message: string, title: string = 'Error', config?: AlertConfig): Observable<SweetAlertResult> {
    return Alert.alert(title, message || null, {
      icon: 'error',
      acceptText: config ? config.acceptText || null : null,
      cancelText: config ? config.cancelText || null : null,
      isHTML: config ? config.isHTML || false : false,
      time: config ? config.time || null : null,
      showConfirmButton: config ? config.showConfirmButton : false,
    });
  }

  static warn(message: string, title: string = 'Advertencia', config?: AlertConfig): Observable<SweetAlertResult> {
    return Alert.alert(title, message || null, {
      icon: 'warning',
      acceptText: config ? config.acceptText || null : null,
      cancelText: config ? config.cancelText || null : null,
      isHTML: config ? config.isHTML || false : false,
      time: config ? config.time || null : null,
      showConfirmButton: config ? config.showConfirmButton : false,
    });
  }

  static info(message: string, title: string = 'Información', config?: AlertConfig): Observable<SweetAlertResult> {
    return Alert.alert(title, message || null, {
      icon: 'info',
      acceptText: config ? config.acceptText || null : null,
      cancelText: config ? config.cancelText || null : null,
      isHTML: config ? config.isHTML || false : false,
      time: config ? config.time || null : null,
      showConfirmButton: config ? config.showConfirmButton : false,
    });
  }

  static confirm(title: string, message?: string, config?: AlertExtendedConfig): Observable<SweetAlertResult> {
    return from(
      Swal.fire({
        heightAuto: false,
        title: title,
        text: message || null,
        icon: config ? config.icon || 'warning' : 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#4D5D6A',
        confirmButtonText: config ? config.acceptText || Alert.ACCEPT_TEXT : Alert.ACCEPT_TEXT,
        cancelButtonText: config ? config.cancelText || Alert.CANCEL_TEXT : Alert.CANCEL_TEXT,
      })
    );
  }

  private static alert(title: string, message: string, config: AlertExtendedConfig): Observable<SweetAlertResult> {
    return from(
      Swal.fire({
        heightAuto: false,
        icon: config.icon,
        title: title,
        text: config.isHTML ? null : message || null,
        html: config.isHTML ? message : null,
        showConfirmButton: config.showConfirmButton || false,
        confirmButtonText: config.acceptText || Alert.ACCEPT_TEXT,
        cancelButtonText: config.cancelText || Alert.CANCEL_TEXT,
        timer: config.showConfirmButton ? null : config.time !== null ? config.time : 4000,
      })
    );
  }
}
