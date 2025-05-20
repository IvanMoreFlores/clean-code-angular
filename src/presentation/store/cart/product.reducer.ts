import { createReducer, on } from '@ngrx/store';
import {
  addProduct,
  deleteProduct,
  increaseProduct,
  decreaseProduct,
} from './product.actions';
import { Product } from '../../../domain/entities/product.entity';

export const initialState: Product[] = [];

export const productReducer = createReducer(
  initialState,
  on(addProduct, (state, { product }) => {
    const existingProduct = state.find((p) => p.id === product.id);

    if (existingProduct) {
      return state.map((p) =>
        p.id === product.id ? { ...p, count: (p.count ?? 1) + 1 } : p
      );
    } else {
      return [...state, { ...product, count: 1 }];
    }
  }),
  on(deleteProduct, (state, { id }) =>
    state.filter((product) => product.id !== id)
  ),
  on(increaseProduct, (state, { id }) =>
    state.map((product) =>
      product.id === id
        ? { ...product, count: (product.count ?? 0) + 1 }
        : product
    )
  ),
  on(decreaseProduct, (state, { id }) =>
    state.map((product) =>
      product.id === id && (product.count ?? 0) > 1
        ? { ...product, count: (product.count ?? 0) - 1 }
        : product
    )
  )
);
