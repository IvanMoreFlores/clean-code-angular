import { Injectable } from '@angular/core';
import { ProductsRepository } from '../../domain/repositories/products.repository';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../../domain/entities/product.entity';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProductsApiRepository implements ProductsRepository {
  constructor(private readonly http: HttpClient) {}
  getProducts(): Observable<Product[]> {
    return this.http
      .get<Product[]>('https://dummyjson.com/products')
      .pipe(map((response: any) => response.products));
  }
  getProductById(id: string): Observable<Product> {
    return this.http
      .get<Product>(`https://dummyjson.com/products/${id}`)
      .pipe(map((response: any) => response.product));
  }
  createProduct(product: Product): Observable<Product> {
    return this.http
      .post<Product>('https://dummyjson.com/products/add', product)
      .pipe(map((response: any) => response));
  }
  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http
      .put<Product>(`https://dummyjson.com/products/${id}`, product)
      .pipe(map((response: any) => response));
  }
  deleteProduct(id: string): Observable<void> {
    return this.http
      .delete<void>(`https://dummyjson.com/products/${id}`)
      .pipe(map(() => {}));
  }
  getCategories(): Observable<any> {
    return this.http
      .get<any>('https://dummyjson.com/products/categories')
      .pipe(map((response: any) => response));
  }
  getSearchProduct(word: string): Observable<Product[]> {
    return this.http
      .get<Product[]>(`https://dummyjson.com/products/search?q=${word}`)
      .pipe(map((response: any) => response.products));
  }
  getProductByCategory(category: string): Observable<Product[]> {
    return this.http
      .get<Product[]>(`https://dummyjson.com/products/category/${category}`)
      .pipe(map((response: any) => response.products));
  }
}
