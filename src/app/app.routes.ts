import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('@pages/home/home.component').then(comp => comp.HomeComponent) },
  { path:"**", loadComponent: () => import('@pages/not-found/not-found.component').then(comp => comp.NotFoundComponent) }
];
