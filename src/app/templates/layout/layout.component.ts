import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SessionManagerComponent } from '@components/session-manager/session-manager.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink, SessionManagerComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements OnInit {

  ngOnInit(): boolean {
    const token: string = localStorage.getItem('auth') || '!';
    if(token != '!'){
      return true;
    } else {
      return false;
    };
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
