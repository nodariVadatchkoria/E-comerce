import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriesComponent} from "./categories.component";
import {CategoriesAddEditComponent} from "./categories-add-edit/categories-add-edit.component";

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
  },
  {
    path: 'create',
    component: CategoriesAddEditComponent,
  },
  {
    path: 'edit/:id',
    component: CategoriesAddEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
