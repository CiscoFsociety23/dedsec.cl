import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '@components/login/login.component';
import { ProductsComponent } from '@components/products/products.component';

@Component({
    standalone: true,
    selector: 'app-home',
    imports: [LoginComponent, ProductsComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  ngOnInit(): boolean {
    const token: string = localStorage.getItem('auth') || '!';
    if(token != '!'){
      return true;
    } else {
      return false;
    };
  };

}
