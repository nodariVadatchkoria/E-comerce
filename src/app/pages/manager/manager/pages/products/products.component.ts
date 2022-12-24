import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../../../../core/services ";
import {Product} from "../../../../../core/interfaces";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
 products: Product[] = []
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.productsService.getProducts({
    })
      .pipe()
      .subscribe(res =>{
        this.products = res
      })
  }
  deleteItem(id: string |number) {
    this.productsService.deleteItem(id)
      .subscribe(res => {
        this.getAll()
      })
  }
}
