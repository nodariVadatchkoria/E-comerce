import { Component, OnInit } from '@angular/core';
import {AuthService, CartService} from "../../../core/services ";
import {Observable} from "rxjs";
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   cartCount$: Observable<number> = this.cartService.cartCount$;
  searchInput: any;
  get userIsAuthenticated() {
    return this.authService.token;
  }
  get user() {
    return this.authService.user;
  }
  constructor(
    private authService: AuthService,
    private cartService: CartService,
    private route: Router,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }

  search($event: any) {
this.route.navigate(['/products'], {queryParams: {search: $event}})
  }
}
