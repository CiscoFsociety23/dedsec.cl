import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Products } from '@interfaces/products';
import { ProductsService } from '@services/products.service';
import { Observable } from 'rxjs';

@Component({
    standalone: true,
    selector: 'app-products',
    imports: [],
    templateUrl: './products.component.html',
    styleUrl: './products.component.css'
})
export class ProductsComponent {

  public products: Products[] = [];
  private productService: ProductsService = new ProductsService(this.http);

  constructor(private http: HttpClient) {
    this.getAllProducts();
  };

  private getAllProducts(): void {
    const getProducts: Observable<Products[]> = this.productService.getProducts();
    getProducts.subscribe(res => {
      for(var i = 0; i < res.length; i++){
        this.products.push(res[i]);
      };
    });
  };

  public shopProduct(id: number){
    const sell = this.productService.makeSell(id, 1);
    sell.subscribe(res => {
      location.reload();
    });
  };

}
