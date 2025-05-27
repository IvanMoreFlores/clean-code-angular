import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Product } from '../../../domain/entities/product.entity';
import { deleteProduct } from '../../store/cart/product.actions';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-cart-shopping',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.css'],
  imports: [CommonModule, NavbarComponent],
  standalone: true,
})
export class CartPage {
  products$: Observable<Product[]>;
  total$: Observable<number>;

  constructor(private store: Store<{ products: Product[] }>) {
    this.products$ = this.store.select((state) => state.products);
    this.total$ = this.products$.pipe(
      map((products) =>
        products.reduce((acc, product) => acc + product.price * (product.count ?? 1), 0)
      )
    );
  }

  onClickRemove(id: number) {
    console.log('Producto eliminado:', id);
    this.store.dispatch(deleteProduct({ id: id }));
  }
}
