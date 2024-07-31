import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SessionManagerComponent } from '@components/session-manager/session-manager.component';
import { SessionCheckService } from '@services/session-check.service';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink, SessionManagerComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

  constructor(private http: HttpClient) {}

  private tokenChecker: SessionCheckService = new SessionCheckService(this.http);

  ngOnInit(): boolean {
    return this.tokenChecker.checkToken();
  };

  public toggleMenu = (): void => {
    document.querySelector(".NavigationList")?.classList.toggle("show");
    const iconElement = document.querySelector("i.fa-solid");
    if (iconElement) {
      if (iconElement.classList.contains("fa-bars")) {
        iconElement.classList.remove("fa-bars");
        iconElement.classList.add("fa-x");
      } else {
        iconElement.classList.remove("fa-x");
        iconElement.classList.add("fa-bars");
      };
    };
  };

}
