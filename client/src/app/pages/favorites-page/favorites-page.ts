import { Component, OnInit } from '@angular/core';
import { ProductWrapper } from '../../components/product-wrapper/product-wrapper';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-favorites-page',
  imports: [ProductWrapper],
  templateUrl: './favorites-page.html',
  styleUrl: './favorites-page.css',
})
export class FavoritesPage implements OnInit {
  favorites: Product[] = [];

  ngOnInit(): void {
    const data = localStorage.getItem('favorites');
    this.favorites = data ? JSON.parse(data) : [];
    this.favorites = [
      {
        id: 0,
        name: 'Apple',
        imageUrl: 'assets/apple.png',
        price: 5,
        category: 'warm-colored-fruits',
      },
      {
        id: 1,
        name: 'Orange',
        imageUrl: 'assets/orange.png',
        price: 9,
        category: 'warm-colored-fruits',
      },
      {
        id: 2,
        name: 'Grapes',
        imageUrl: 'assets/grapes.png',
        price: 23,
        category: 'warm-colored-fruits',
      },
      {
        id: 3,
        name: 'Apple',
        imageUrl: 'assets/apple.png',
        price: 5,
        category: 'cold-colored-fruits',
      },
      {
        id: 0,
        name: 'Apple',
        imageUrl: 'assets/apple.png',
        price: 5,
        category: 'cold-colored-fruits',
      },
      {
        id: 0,
        name: 'Orange',
        imageUrl: 'assets/orange.png',
        price: 9,
        category: 'cold-colored-fruits',
      },
      {
        id: 0,
        name: 'Grapes',
        imageUrl: 'assets/grapes.png',
        price: 23,
        category: 'cold-colored-fruits',
      },
    ];
  }
}
