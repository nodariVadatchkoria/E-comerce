import { Component, OnInit } from '@angular/core';
import {CartService, OrderService} from "../../core/services ";
import {Cart} from "../../core/interfaces";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
   carItems: Cart[] = []
  cartSum = 0;
  constructor(
    private cartService: CartService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.getCarts()
  }

  getCarts() {
     this.cartService.getCarts()
       .pipe()
        .subscribe(res => {
          this.carItems = res
          this.cartSum = this.carItems.reduce((acc, item) => acc + item.total, 0)
        })
  }

  removeItem(item: Cart) {
    this.cartService.deleteItem(item.id)
      .pipe()
      .subscribe(res => {
        this.getCarts()
      })
  }

  checkout() {
  this.orderService.createOrder()
    .pipe()
    .subscribe(res => {
      this.getCarts()
    }
    )
  }
}
