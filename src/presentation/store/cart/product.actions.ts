import { createAction, props } from '@ngrx/store';
import { Product } from '../../../domain/entities/product.entity';

export const addProduct = createAction(
  '[Product] Add Product',
  props<{ product: Product }>()
);
export const deleteProduct = createAction(
  '[Product] Delete Product',
  props<{ id: number }>()
);

export const increaseProduct = createAction(
  '[Product] Increase Product',
  props<{ id: number }>()
);

export const decreaseProduct = createAction(
  '[Product] Decrease Product',
  props<{ id: number }>()
);
