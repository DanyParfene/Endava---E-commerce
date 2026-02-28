import { Routes } from '@angular/router';
import { Landing } from './pages/landing/landing';
import { LoginPage } from './pages/login-page/login-page';
import { RegisterPage } from './pages/register-page/register-page';
import { ProductPage } from './pages/product-page/product-page';
import { ProductsPage } from './pages/products-page/products-page';
import { AllProductsPage } from './pages/all-products-page/all-products-page';

export const routes: Routes = [
  { path: '', component: Landing },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  {
    path: 'products',
    component: ProductsPage,
    children: [
        {
            path: '',
            component: AllProductsPage
        },
      {
        path: 'Apple',
        component: ProductPage,
      },
    ],
  },
];
