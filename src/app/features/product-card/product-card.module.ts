import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductCardComponent} from './product-card.component';
import {RouterLink} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    SharedModule

  ],
  exports: [
    ProductCardComponent
  ]
})
export class ProductCardModule {
}
