import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('@pages/home/home.component').then(comp => comp.HomeComponent) },
  { path: 'sobre-nosotros', loadComponent: () => import('@pages/about-us/about-us.component').then(comp => comp.AboutUsComponent) },
  { path:"**", loadComponent: () => import('@pages/not-found/not-found.component').then(comp => comp.NotFoundComponent) }
];
