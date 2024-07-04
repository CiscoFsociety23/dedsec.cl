import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '@environment';
import { Products } from '@interfaces/products';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Products[]>{
    return this.http.get<Products[]>(`${env.URL_API_VENUS}/inventory/products`);
  };

}
