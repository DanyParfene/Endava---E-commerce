import { Component, input, signal } from '@angular/core';
import { ActionButton } from '../action-button/action-button';

@Component({
  selector: 'app-product-page-card',
  imports: [ActionButton],
  templateUrl: './product-page-card.html',
  styleUrl: './product-page-card.css',
})
export class ProductPageCard {
  name = input.required<string>();
  imageUrl = input.required<string>();
  price = input.required<number>();
  description = input.required<string>();
  category = input.required<string>();

  quantity = signal(1);

  increment() {
    this.quantity.update(q => q + 1);
  }

  decrement() {
    if (this.quantity() > 1) {
      this.quantity.update(q => q - 1);
    }
  }

  handleAddToCart() {
    console.log(`Added ${this.quantity()} x ${this.name()} to cart`);
  }

  handleFavorite() {
    console.log(`${this.name()} added to favorites`);
  }
}
