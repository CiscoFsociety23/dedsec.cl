import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('@pages/home/home.component').then(comp => comp.HomeComponent) },
  { path: 'products', loadComponent: () => import('@pages/products/products.component').then(comp => comp.ProductsComponent) },
  { path: 'categories', loadComponent: () => import('@pages/categories/categories.component').then(comp => comp.CategoriesComponent) },
  { path: 'contact', loadComponent: () => import('@pages/contact/contact.component').then(comp => comp.ContactComponent) },
  { path: 'registry', loadComponent: () => import('@pages/registry/registry.component').then(comp => comp.RegistryComponent) },
  { path: 'access', loadComponent: () => import('@pages/access/access.component').then(comp => comp.AccessComponent) },
  { path:"**", loadComponent: () => import('@pages/not-found/not-found.component').then(comp => comp.NotFoundComponent) },
];
