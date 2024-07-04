import { Component, OnInit } from '@angular/core';
import { CorpIdentityComponent } from '@components/corp-identity/corp-identity.component';
import { LoginComponent } from '@components/login/login.component';
import { ProductsComponent } from '@components/products/products.component';
import { SessionManagerComponent } from '@components/session-manager/session-manager.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LoginComponent, SessionManagerComponent, CorpIdentityComponent, ProductsComponent],
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
