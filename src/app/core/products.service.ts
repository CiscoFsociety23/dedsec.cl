import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environment';
import { Products } from '@interfaces/products';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Products[]>{
    return this.http.get<Products[]>(`${environment.URL_API_VENUS}/inventory/products`);
  };

  public makeSell(id: number, quantity: number){
    return this.http.post(`${environment.URL_API_VENUS}/inventory/products/shop?productId=${id}&quantity=${quantity}`, null)
  }

}
