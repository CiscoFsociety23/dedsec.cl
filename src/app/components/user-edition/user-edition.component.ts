import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { User, UserBody, UserUpdate } from '@interfaces/user';
import { NotificationService } from '@services/notification.service';
import { UserService } from '@services/user.service';
import { Observable } from 'rxjs';

@Component({
    standalone: true,
    selector: 'app-user-edition',
    imports: [],
    templateUrl: './user-edition.component.html',
    styleUrl: './user-edition.component.css'
})
export class UserEditionComponent {

  @Input() user: User | null = null;
  private userService: UserService = new UserService(this.http);
  private notification: NotificationService = new NotificationService();

  constructor(private http: HttpClient) {};

  public updateUser(): void {
    const name: string = (<HTMLInputElement>document.getElementById('name')).value;
    const lastName: string = (<HTMLInputElement>document.getElementById('lastName')).value;
    const email: string = (<HTMLInputElement>document.getElementById('email')).value;
    const passwd: string = (<HTMLInputElement>document.getElementById('passwd')).value;
    const profile: string = (<HTMLInputElement>document.getElementById('profile')).value || 'null';
    if(passwd != ""){
      const userData: UserBody = { name, lastName, email, passwd, profile: Number(profile) }
      const token = localStorage.getItem('auth');
      const updateUser: Observable<UserUpdate> = this.userService.updateUser(Number(this.user?.id), userData, String(token));
      updateUser.subscribe((res) => {
        if(res.status != false){
          this.notification.successNotification('Se ha actualizado correctamente', `El usuario ${this.user?.email} se ha actualizado correctamente`);
          setTimeout(() => location.reload(), 2000);
        } else {
          this.notification.errorNotification('No se ha podido actualizar', `Estado: ${res.status}`);
          setTimeout(() => location.reload(), 2000);
        };
      });
    } else {
      this.notification.errorNotification('Debe ingresar una contraseña', 'El campo de contraseña no puede estar vacio');
    };
  };

}
