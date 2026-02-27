import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { RedirectButton } from './components/redirect-button/redirect-button';
import { ProductCard } from './components/product-card/product-card';
import { Sidebar } from './components/sidebar/sidebar';
import { SidebarCategory } from './components/sidebar-category/sidebar-category';
import { ProductWrapper } from './components/product-wrapper/product-wrapper';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, RedirectButton, ProductCard, Sidebar, SidebarCategory, ProductWrapper],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('client');
  products = signal<Product[]>([
    { name: 'Apple', imageUrl: 'assets/apple.png', price: 5 },
    { name: 'Orange', imageUrl: 'assets/orange.png', price: 9 },
    { name: 'Grapes', imageUrl: 'assets/grapes.png', price: 23 },
    { name: 'Apple', imageUrl: 'assets/apple.png', price: 5 },
    { name: 'Orange', imageUrl: 'assets/orange.png', price: 9 },
    { name: 'Grapes', imageUrl: 'assets/grapes.png', price: 23 },
    { name: 'Apple', imageUrl: 'assets/apple.png', price: 5 },
    { name: 'Orange', imageUrl: 'assets/orange.png', price: 9 },
    { name: 'Grapes', imageUrl: 'assets/grapes.png', price: 23 },
  ]);
}
