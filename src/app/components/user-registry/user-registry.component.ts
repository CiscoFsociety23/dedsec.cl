import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { UserCreation } from '@interfaces/user';
import { NotificationService } from '@services/notification.service';
import { UserService } from '@services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-registry',
  standalone: true,
  imports: [],
  templateUrl: './user-registry.component.html',
  styleUrl: './user-registry.component.css'
})
export class UserRegistryComponent {

  private notificationService: NotificationService = new NotificationService();
  private userService: UserService = new UserService(this.http);

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
      };
    });
  };

}
