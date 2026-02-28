import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { LoginPage } from './pages/login-page/login-page';
import { RegisterPage } from './pages/register-page/register-page';
import { ProductPage } from './pages/product-page/product-page';
import { ProductsPage } from './pages/products-page/products-page';
import { AllProductsPage } from './pages/all-products-page/all-products-page';
import { CategoryPage } from './pages/category-page/category-page';
import { AccountPage } from './pages/account-page/account-page';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: 'account', component: AccountPage },
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
