import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProductsUseCase } from '../../../application/use-cases/products.use-cases';
import {
  loadProducts,
  loadProductsFailure,
  loadProductsSuccess,
} from './products.actions';

@Injectable()
export class ProductsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly productService: ProductsUseCase
  ) {}
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() =>
        this.productService
          .getProducts().pipe(
            map((products) => {
              return loadProductsSuccess({ products });
            }),
            catchError((error) => {
              return of(loadProductsFailure({ error }));
            })
          )
      )
    )
  );
}
