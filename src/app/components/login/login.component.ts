import { Component } from '@angular/core';
import { UserService } from '@services/user.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceStatus } from '@interfaces/services';
import { Access } from '@interfaces/user';
import { NotificationService } from '@services/notification.service';

@Component({
    standalone: true,
    selector: 'app-login',
    imports: [],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {

  private userService: UserService = new UserService(this.http);
  private notificationService: NotificationService = new NotificationService();

  constructor(private http: HttpClient) { };

  public getAccess(): void {
    const email: string = (<HTMLInputElement>document.getElementById('email')).value;
    const passwd: string = (<HTMLInputElement>document.getElementById('passwd')).value;
    const service: Observable<ServiceStatus> = this.userService.checkService();
    service.subscribe(res => {
      if (res.Services[0].name == 'User Service' && res.Services[0].status.name == 'ON-LINE'){
        const access: Observable<Access> = this.userService.getAccess({ email, passwd });
        access.subscribe(res => {
          if (res.access == true) {
            this.notificationService.successNotification('Acceso Correcto', 'Las credenciales proporcionadas son validas');
            localStorage.setItem('auth', res.token);
            localStorage.setItem('x-api-user', btoa(email));
            localStorage.setItem('x-api-auth', btoa(passwd));
          } else {
            this.notificationService.errorNotification(res.message.split(',')[0] || 'Credenciales Invalidas', res.message || 'Las credenciales proporcionadas no son validas');
          };
        });
      } else {
        this.notificationService.errorNotification('Servicio No Disponible', 'El servicio de usuarios no esta disponible en este momento');
      };
    });
  };

}
