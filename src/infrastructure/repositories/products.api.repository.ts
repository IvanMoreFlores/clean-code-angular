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
            .pipe(
                map((response: any) => response.products)
            );
    }
    getProductById(id: string): Observable<Product> {
        return this.http
            .get<Product>(`https://dummyjson.com/products/${id}`)
            .pipe(
                map((response: any) => response.product)
            );
    }
    createProduct(product: Product): Observable<Product> {
        return this.http
            .post<Product>('https://dummyjson.com/products/add', product)
            .pipe(
                map((response: any) => response.product)
            );
    }
    updateProduct(product: Product): Observable<Product> {
        return this.http
            .put<Product>(`https://dummyjson.com/products/${product.id}`, product)
            .pipe(
                map((response: any) => response.product)
            );
    }
    deleteProduct(id: string): Observable<void> {
        return this.http
            .delete<void>(`https://dummyjson.com/products/${id}`)
            .pipe(
                map(() => {})
            );
    }
    getProductsByCategory(category: string): Observable<Product[]> {
        return this.http
            .get<Product[]>(`https://dummyjson.com/products/category/${category}`)
            .pipe(
                map((response: any) => response.products)
            );
    }
    getProductsBySearch(query: string): Observable<Product[]> {
        return this.http
            .get<Product[]>(`https://dummyjson.com/products/search?q=${query}`)
            .pipe(
                map((response: any) => response.products)
            );
    }
    getProductsByBrand(brand: string): Observable<Product[]> {
        return this.http
            .get<Product[]>(`https://dummyjson.com/products/brand/${brand}`)
            .pipe(
                map((response: any) => response.products)
            );
    }
}