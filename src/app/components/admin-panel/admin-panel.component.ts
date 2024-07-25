import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '@interfaces/user';
import { UserService } from '@services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent implements OnInit {

  private userService: UserService = new UserService(this.http);
  public userList: User[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getUsersList();
  }
;

  private getUsersList(): void {
    const listUsers: Observable<User[]> = this.userService.getUsers();
    listUsers.subscribe((res) => {
      
    });
  };

}
