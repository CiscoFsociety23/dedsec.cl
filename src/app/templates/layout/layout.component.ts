import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

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
