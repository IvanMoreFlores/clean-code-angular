import { Routes } from '@angular/router';
import { LoginPage } from '../pages/login/login.page';
import { HomePage } from '../pages/home/home.page';
import { CartPage } from '../pages/cart/cart.page';
import { DetailPage } from '../pages/detail/detail.page';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'cart',
    component: CartPage,
  },
  {
    path: 'product/detail/:id',
    component: DetailPage,
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
