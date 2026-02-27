import { Component, signal } from '@angular/core';
import { Header } from '../../components/header/header';
import { Sidebar } from '../../components/sidebar/sidebar';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductWrapper } from '../../components/product-wrapper/product-wrapper';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-landing',
  imports: [Header, Sidebar, ProductCard, ProductWrapper],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {
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
