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
  products = input<Product[]>([
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
