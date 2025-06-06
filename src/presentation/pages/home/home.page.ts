import { Component } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Product } from '../../../domain/entities/product.entity';
import { loadProducts } from '../../store/products/products.actions';
import { ProductsUseCase } from '../../../application/use-cases/products.use-cases';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CardProductComponent } from '../../components/card/product-card.component';

interface ICategories {
  slug: string;
  name: string;
  url: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [NavbarComponent, CardProductComponent, CommonModule, FormsModule],
  standalone: true,
})
export class HomePage {
  products$: Observable<Product[]>;
  constructor(
    private readonly productUseCase: ProductsUseCase,
    private readonly store: Store<{ products: { products: Product[] } }>
  ) {
    this.products$ = this.store.select((state) => state.products.products);
  }
  products: Product[] = [];
  categories: ICategories[] = [];
  statusModal: boolean = false;
  tbnText: string = 'Agregar producto';
  newProduct = {
    id: 0,
    title: '',
    description: '',
    price: 0,
    stock: 0,
  };

  async ngOnInit() {
    try {
      this.store.dispatch(loadProducts());
      const result = await lastValueFrom(this.productUseCase.getProducts());
      const data = await lastValueFrom(this.productUseCase.getCategories());
      this.categories = data;
      this.products = result;
      console.log(this.categories);
      console.log(this.products);
    } catch (error) {}
  }

  onClickBuy(product: Product) {
    console.log('Producto comprado en el padre:', product);
  }

  async onChangeInputSearch(event: Event) {
    const word = (event.target as HTMLInputElement).value;
    try {
      const result = await lastValueFrom(
        this.productUseCase.getSearchProduct(word)
      );
      console.log(result);
      this.products = result;
    } catch (error) {
      console.log('Hubo un error en onChangeInputSearch :' + error);
    }
  }

  async onSelectCategory(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    if (value === '.: Todos :.') {
      this.getAllProducts();
      return;
    }
    try {
      const result = await lastValueFrom(
        this.productUseCase.getProductsByCategory(value)
      );
      console.log(result);
      this.products = result;
    } catch (error) {
      console.log('Hubo un error en onSelectCategory :' + error);
    }
  }

  async getAllProducts() {
    try {
      const result = await lastValueFrom(this.productUseCase.getProducts());
      console.log(result);
      this.products = result;
    } catch (error) {}
  }

  openModalProduct() {
    this.statusModal = true;
    this.tbnText = 'Agregar producto';
  }

  async onClickUpdateProduct(event: Event) {
    event.preventDefault();
    console.log(this.newProduct);
    try {
      const result = await lastValueFrom(this.productUseCase.updateProduct(
        this.newProduct.id,
        JSON.stringify(this.newProduct)
      ));
      console.log(result);
      if (result) {
        console.log('Producto actualizado correctamente');
        this.getAllProducts();
        this.newProduct = {
          id: 0,
          title: '',
          description: '',
          price: 0,
          stock: 0,
        };
        this.statusModal = false;
      } else {
        alert('Error al actualizar el producto');
      }
    } catch (error) {
      console.log(error);
    }
  }

  openModalEditProduct(product: Product) {
    this.tbnText = 'Editar producto';
    this.statusModal = true;
    this.newProduct = {
      id: product.id,
      title: product.title,
      description: product.description,
      price: product.price,
      stock: product.stock,
    };
  }

  onClick(event: Event) {
    event.preventDefault();
    if (this.newProduct.id === 0) {
      this.onClickAddProduct(event);
    } else {
      this.onClickUpdateProduct(event);
    }
  }

  async onClickAddProduct(event: Event) {
    event.preventDefault();
    console.log(this.newProduct);
    try {
      const result = await lastValueFrom(
        this.productUseCase.createProduct(this.newProduct)
      );
      console.log(result);
      if (result) {
        console.log('Producto agregado correctamente');
        this.products.push(result);
        this.newProduct = {
          id: 0,
          title: '',
          description: '',
          price: 0,
          stock: 0,
        };
        this.statusModal = false;
      } else {
        alert('Error al agregar el producto');
      }
    } catch (error) {
      console.log(error);
    }
  }

  onDelete(product: Product) {
    return this.productUseCase.deleteProduct(product.id.toString());
  }

  closeModalProduct() {
    this.statusModal = false;
  }
}
