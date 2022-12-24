import { Component, OnInit } from '@angular/core';
import {CategoriesService} from "../../../../../core/services /categories.service";
import {Category} from "../../../../../core/interfaces";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
   categories: Category[] = []
  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.getAll()
  }
  getAll() {
    this.categoriesService.getAll()
      .pipe()
      .subscribe(res =>{
      this.categories = res
    })
  }
  deleteItem(id: number) {
    this.categoriesService.deleteItem(id)
      .subscribe(res => {
        this.getAll()
      })
  }
}
