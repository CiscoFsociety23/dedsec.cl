import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserCreation } from '@interfaces/user';
import { NotificationService } from '@services/notification.service';
import { SessionCheckService } from '@services/session-check.service';
import { UserService } from '@services/user.service';
import { Observable } from 'rxjs';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-sign-up-user',
  standalone: true,
  imports: [],
  templateUrl: './sign-up-user.component.html',
  styleUrl: './sign-up-user.component.css'
})
export class SignUpUserComponent {

  private notificationService: NotificationService = new NotificationService();
  private userService: UserService = new UserService(this.http);
  private tokenService: SessionCheckService = new SessionCheckService(this.http);

  constructor(private http: HttpClient) {};

  public createUser(): void {
    const name: string = (<HTMLInputElement>document.getElementById('name')).value;
    const lastName: string = (<HTMLInputElement>document.getElementById('lastName')).value;
    const email: string = (<HTMLInputElement>document.getElementById('email')).value;
    const passwd: string = (<HTMLInputElement>document.getElementById('passwd')).value;
    const client: Observable<UserCreation> = this.userService.createUser({ name, lastName, email, passwd, profile: 2 });
    client.subscribe((res) => {
      if(res.status != false){
        this.notificationService.successNotification(res.Message, `Se ha asignado el perfil: ${res.User.profile.profile}`);
        
      } else {
        this.notificationService.errorNotification('No se puede crear el usuario', `Respuesta: ${res.status}`);
      };
    });
  };

  public getProfile(): string {
    const auth: string = localStorage.getItem('auth') || '!';
    const profile: string = this.tokenService.checkProfile(auth);
    return profile;
  };

}
