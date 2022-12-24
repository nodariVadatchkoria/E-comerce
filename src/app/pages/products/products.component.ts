import { Component, OnInit } from '@angular/core';
import {Category, Product} from "../../core/interfaces";
import {CategoriesService, ProductsService} from "../../core/services ";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = []
  categoryId?: number
  categories$: Observable<Category[]> = this.categoriesService.getAll()
  search: any;

  constructor(
    private productsService: ProductsService,
    private categoriesService: CategoriesService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params['category']
      this.search = params['search']
      this.getProducts()
    })
  }


  getProducts(){
    const params = {
      categoryId: this.categoryId || null,
      search: this.search || null,
    }
    this.productsService.getProducts(params)
      .pipe()
      .subscribe(res =>{
      this.products = res
    })
  }

  searchHandle(search: string) {
    if(search.length > 2){
      this.search = search
      this.getProducts()
    }else if(search.length === 0){
      this.search = null
      this.getProducts()
    }

  }
}
