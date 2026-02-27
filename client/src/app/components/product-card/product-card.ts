import { Component, computed, input } from '@angular/core';
import { ActionButton } from '../action-button/action-button';

@Component({
  selector: 'app-product-card',
  imports: [ActionButton],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  name = input.required<string>();
  imageUrl = input.required<string>();
  price = input.required<number>();

  backgroundImage = computed(() => `url('${this.imageUrl()}')`)
}
