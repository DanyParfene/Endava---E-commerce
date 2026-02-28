import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { RedirectButton } from './components/redirect-button/redirect-button';
import { ProductCard } from './components/product-card/product-card';
import { Sidebar } from './components/sidebar/sidebar';
import { SidebarCategory } from './components/sidebar-category/sidebar-category';
import { ProductWrapper } from './components/product-wrapper/product-wrapper';
import { Product } from './models/product.model';
import { AccountForm } from './components/account-form/account-form';
import { OrderForm } from './components/order-form/order-form';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, RedirectButton, ProductCard, Sidebar, SidebarCategory, ProductWrapper, AccountForm, OrderForm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('client');
  products = signal<Product[]>([
    { id: 0, name: 'Apple', imageUrl: 'assets/apple.png', price: 5, category: 'warm-colored-fruits' },
    { id: 1, name: 'Orange', imageUrl: 'assets/orange.png', price: 9, category: 'warm-colored-fruits' },
    { id: 2, name: 'Grapes', imageUrl: 'assets/grapes.png', price: 23, category: 'warm-colored-fruits' },
    { id: 3, name: 'Apple', imageUrl: 'assets/apple.png', price: 5, category: 'cold-colored-fruits' },
    { id: 4, name: 'Orange', imageUrl: 'assets/orange.png', price: 9, category: 'cold-colored-fruits' },
    { id: 5, name: 'Grapes', imageUrl: 'assets/grapes.png', price: 23, category: 'cold-colored-fruits' },
  ]);
}
