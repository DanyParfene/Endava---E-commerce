import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { LoginPage } from './pages/login-page/login-page';
import { RegisterPage } from './pages/register-page/register-page';
import { ProductPage } from './pages/product-page/product-page';
import { ProductsPage } from './pages/products-page/products-page';
import { AllProductsPage } from './pages/all-products-page/all-products-page';
import { CategoryPage } from './pages/category-page/category-page';
import { AccountPage } from './pages/account-page/account-page';
import { OrderPage } from './pages/order-page/order-page';
import { FavoritesPage } from './pages/favorites-page/favorites-page';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: 'account', component: AccountPage },
  { path: 'favorites', component: FavoritesPage },
  { path: 'orders/:id', component: OrderPage },
  {
    path: 'products',
    component: ProductsPage,
    children: [
      {
        path: '',
        component: AllProductsPage,
      },
      {
        path: 'Apple',
        component: ProductPage,
      },
      {
        path: 'warm-colored-fruits',
        component: CategoryPage,
      },
    ],
  },
];
