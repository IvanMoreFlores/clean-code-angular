import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../../../domain/entities/product.entity';

// Selector del estado de los productos
export const selectProductState = createFeatureSelector<Product[]>('products');

export const selectTotalCount = createSelector(
  selectProductState,
  (state) =>
    // state.reduce((total, product) => total + (product.count ?? 0), 0)
    state.length
);


// Componente -> Servicio -> Store (Boton agregar)
// Componente -> Store -> Servicio -> Componente -> Store (Boton agregar)

// Componente -> Listar productos -> Store
// -> Home -> Conctacto -> Home -> Store 
// Agregar producto -> Store (Total productos + nuevo) -> Servicio 