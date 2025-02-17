import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@environment';
import { UserCreation } from '@interfaces/user';
import { NotificationService } from '@services/notification.service';
import { SessionCheckService } from '@services/session-check.service';
import { UserService } from '@services/user.service';
import { Observable } from 'rxjs';

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
  private router: Router = new Router();

  constructor(private http: HttpClient) {};

  public createUser(): void {
    const name: string = (<HTMLInputElement>document.getElementById('name')).value;
    const lastName: string = (<HTMLInputElement>document.getElementById('lastName')).value;
    const email: string = (<HTMLInputElement>document.getElementById('email')).value;
    const passwd: string = (<HTMLInputElement>document.getElementById('passwd')).value;
    if(name == "" || lastName == "" || email == "" || passwd == ""){
      this.notificationService.errorNotification('No se puede crear el usuario', 'Debe completar todos los campos');
    } else {
      const client: Observable<UserCreation> = this.userService.createUser({ name, lastName, email, passwd, profile: 2 }, String(environment.TOKEN_ADMIN));
      client.subscribe((res) => {
        if(res.status != false){
          this.notificationService.successNotification(res.Message, `Se ha asignado el perfil: ${res.User.profile.profile}`);
          this.router.navigate(['/registry/send-validation']);
        } else {
          this.notificationService.errorNotification('No se puede crear el usuario', `Respuesta: ${res.status}`);
          setTimeout(() => { location.reload() }, 2000);
        };
      });
    };
  };

  public getProfile(): string {
    const auth: string = localStorage.getItem('auth') || '!';
    const profile: string = this.tokenService.checkProfile(auth);
    return profile;
  };

}
