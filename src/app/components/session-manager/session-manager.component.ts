import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '@services/user.service';

@Component({
  selector: 'app-session-manager',
  standalone: true,
  imports: [],
  templateUrl: './session-manager.component.html',
  styleUrl: './session-manager.component.css'
})
export class SessionManagerComponent implements OnInit {

  private userService: UserService = new UserService(this.http);
  public tokenExpTime: string = '';
  private countdownTimer: any;

  constructor(private http: HttpClient) {};

  ngOnInit(): void {
    const expDate: Date = this.userService.getTokenExpDate();
    const timeLeft = Math.floor((expDate.getTime() - Date.now()) / 1000);
    this.startCountdown(timeLeft);
  };

  private startCountdown(timeLeft: number): void {
    this.countdownTimer = setInterval(() => {
      timeLeft--;
      const hours = Math.floor(timeLeft / 3600);
      const minutes = Math.floor((timeLeft % 3600) / 60);
      const seconds = timeLeft % 60;
      this.tokenExpTime = `${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      if (timeLeft <= 0) {
        clearInterval(this.countdownTimer);
        this.tokenExpTime = '00:00:00';
        localStorage.clear();
      }
    }, 1000);
  };

  public renovateSession(): void {
    const renew = this.userService.renewSession();
    this.startCountdown(Math.floor((Number(this.userService.getTokenExpDate()) - Date.now()) / 1000));
    setTimeout(() => { location.reload(); }, 1000);
  };

  public closeSession(): void {
    localStorage.clear();
  };

}
