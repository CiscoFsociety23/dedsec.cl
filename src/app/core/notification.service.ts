import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable()
export class NotificationService {

  constructor() { };

  public successNotification(title: string, message: string): void {
    Swal.fire({
      title: title,
      text: message,
      icon: 'success',
      confirmButtonText: 'OK'
    });
  };

  public errorNotification(title: string, message: string): void {
    Swal.fire({
      title: title,
      text: message,
      icon: 'error',
      confirmButtonText: 'OK'
    });
  };

  public infoNotification(title: string): void {
    Swal.fire({
      title: title,
      icon: 'info',
      confirmButtonText: 'OK'
    });
  };

}
