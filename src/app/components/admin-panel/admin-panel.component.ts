import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { User } from '@interfaces/user';
import { NotificationService } from '@services/notification.service';
import { UserService } from '@services/user.service';
import { Observable } from 'rxjs';

@Component({
    standalone: true,
    selector: 'app-admin-panel',
    imports: [],
    templateUrl: './admin-panel.component.html',
    styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent implements OnInit {

  private userService: UserService = new UserService(this.http);
  private notification: NotificationService = new NotificationService();
  public userList: User[] = [];
  @Output() editUser: EventEmitter<User> = new EventEmitter<User>();

  constructor(private http: HttpClient) {};
  ngOnInit(): void {
    this.getUsersList();
  };

  private getUsersList(): void {
    const token = localStorage.getItem('auth');
    const listUsers: Observable<User[]> = this.userService.getUsers(String(token));
    listUsers.subscribe((res) => {
      res.forEach((user) => {
        this.userList.push(user);
      });
    });
  };

  public delete(idUser: number): void {
    const token = localStorage.getItem('auth');
    const userDelete = this.userService.deleteUser(idUser, String(token));
    userDelete.subscribe((res) => {
      if(res.status != false){
        this.notification.successNotification(res.Message, `Se ha eliminado el usuario ${res.User.email}`);
        setTimeout(() => location.reload(), 2000);
      } else {
        this.notification.errorNotification('No se puede eliminar el usuario', `Respuesta: ${res.status}`);
      };
    });
  };

  public sendEdition(user: User): void {
    this.editUser.emit(user);
  };

}
