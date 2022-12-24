import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Category} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService extends BaseService{

 getAll(): Observable<Category[]> {
   return this.get<Category[]>('category');
 }
 getOne(id: number | string): Observable<Category> {
   return this.get<Category>(`category/${id}`);
 }
  create(category: Category): Observable<Category> {
    return this.post<Category>('category', category);
  }
  update(category: Category): Observable<Category> {
    return this.put<Category>(`category/${category.id}`, category);
  }
  deleteItem(id: number | string ): Observable<Category> {
    return this.delete<Category>(`category/${id}`);
  }
}
