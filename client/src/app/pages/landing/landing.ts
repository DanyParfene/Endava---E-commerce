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
    { id: 0, name: 'Apple', imageUrl: 'assets/apple.png', price: 5, category: 'warm-colored-fruits' },
    { id: 1, name: 'Orange', imageUrl: 'assets/orange.png', price: 9, category: 'warm-colored-fruits' },
    { id: 2, name: 'Grapes', imageUrl: 'assets/grapes.png', price: 23, category: 'warm-colored-fruits' },
    { id: 3, name: 'Apple', imageUrl: 'assets/apple.png', price: 5, category: 'cold-colored-fruits' },
    { id: 4, name: 'Orange', imageUrl: 'assets/orange.png', price: 9, category: 'cold-colored-fruits' },
    { id: 5, name: 'Grapes', imageUrl: 'assets/grapes.png', price: 23, category: 'cold-colored-fruits' },
    { id: 0, name: 'Apple', imageUrl: 'assets/apple.png', price: 5, category: 'cold-colored-fruits' },
    { id: 0, name: 'Orange', imageUrl: 'assets/orange.png', price: 9, category: 'cold-colored-fruits' },
    { id: 0, name: 'Grapes', imageUrl: 'assets/grapes.png', price: 23, category: 'cold-colored-fruits' },
  ]);
}
