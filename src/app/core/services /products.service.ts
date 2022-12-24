import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {Product} from "../interfaces";

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService{

  getProducts(params: {
    categoryId?: string |number | null,
    limit?: number,
    search?: string,
  }): Observable<Product[]> {
    return this.get<Product[]>('product', params);
   }

  getOne(id: string |number): Observable<Product> {
    return this.get<Product>(`product/${id}`);
  }
  create(product: Product): Observable<Product> {
    return this.post<Product>('product', product);
  }
  update(product: Product): Observable<Product> {
    return this.put<Product>(`product/${product.id}`, product);
  }
  deleteItem(id: string |number): Observable<Product> {
    return this.delete<Product>(`product/${id}`);
  }

}
