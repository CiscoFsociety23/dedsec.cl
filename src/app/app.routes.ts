import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('@pages/home/home.component').then(comp => comp.HomeComponent) },
  { path: 'catalogue', loadComponent: () => import('@pages/catalog/catalog.component').then(comp => comp.CatalogComponent) },
  { path: 'categories', loadComponent: () => import('@pages/categories/categories.component').then(comp => comp.CategoriesComponent) },
  { path: 'contact', loadComponent: () => import('@pages/contact/contact.component').then(comp => comp.ContactComponent) },
  { path:"**", loadComponent: () => import('@pages/not-found/not-found.component').then(comp => comp.NotFoundComponent) },
];
