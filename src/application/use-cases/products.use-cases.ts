import { Injectable } from '@angular/core';
import { ProductsRepository } from '../../domain/repositories/products.repository';
import { Product } from '../../domain/entities/product.entity';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsUseCase {
  constructor(private readonly productsRepo: ProductsRepository) {}
  getProducts(): Observable<Product[]> {
    return this.productsRepo.getProducts();
  }
  getProductById(id: string): Observable<Product> {
    return this.productsRepo.getProductById(id);
  }
  createProduct(product: Product): Observable<Product> {
    return this.productsRepo.createProduct(product);
  }
  updateProduct(product: Product): Observable<Product> {
    return this.productsRepo.updateProduct(product);
  }
  deleteProduct(id: string): Observable<void> {
    return this.productsRepo.deleteProduct(id);
  }

  getCategories(): Observable<any> {
    return this.productsRepo.getCategories();
  }

  getSearchProduct(word: string): Observable<Product[]> {
    return this.productsRepo.getSearchProduct(word);
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.productsRepo.getProductByCategory(category);
  }
  
}
