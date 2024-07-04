import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Products } from '@interfaces/products';
import { ProductsService } from '@services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
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

}
