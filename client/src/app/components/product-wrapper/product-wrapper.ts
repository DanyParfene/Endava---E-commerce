import { Component, input } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-wrapper',
  imports: [ProductCard],
  templateUrl: './product-wrapper.html',
  styleUrl: './product-wrapper.css',
})
export class ProductWrapper {
  category = input<string>('all');
  products = input<Product[]>([
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
