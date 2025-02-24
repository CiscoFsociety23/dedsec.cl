import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from '@templates/layout/layout.component';
import { inject } from "@vercel/analytics"

@Component({
    selector: 'app-root',
    imports: [CommonModule, RouterOutlet, LayoutComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    inject();
  }

}
