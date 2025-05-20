import { createAction, props } from '@ngrx/store';
import { Product } from '../../../domain/entities/product.entity';

export const loadProducts = createAction('[Product] Load Products');
export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: Product[] }>()
);
export const loadProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: any }>()
);