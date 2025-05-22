import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Product } from '../../../domain/entities/product.entity';
import { selectTotalCount } from '../../store/cart/product.selectors';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
})
export class NavbarComponent {
  productCount$: Observable<number>;
  name: string;
  totalCount$: Observable<number>;

  constructor(
    private readonly router: Router,
    // private readonly authService: AuthService, // replace with actual service for logout
    private readonly store: Store<{ products: Product[] }>
  ) {
    this.totalCount$ = this.store.select(selectTotalCount);
    this.productCount$ = this.store.select((state) => state.products.length);
    this.name =
      localStorage.getItem('firstName') +
      ' ' +
      localStorage.getItem('lastName');
  }

  onClickCart() {
    this.router.navigate(['/cart-shopping']);
  }

  onClickLogout() {
    // this.authService.logout();
    this.router.navigate(['/login']);
  }
}
