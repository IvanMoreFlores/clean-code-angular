import { Observable } from 'rxjs';
import { Product } from '../entities/product.entity';

export abstract class ProductsRepository {
  abstract getProducts(): Observable<Product[]>;
  abstract getProductById(id: string): Observable<Product>;
  abstract createProduct(product: Product): Observable<Product>;
  abstract updateProduct(product: Product): Observable<Product>;
  abstract deleteProduct(id: string): Observable<void>;
}