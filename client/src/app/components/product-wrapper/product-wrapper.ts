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
  products = input<Product[]>();
}
