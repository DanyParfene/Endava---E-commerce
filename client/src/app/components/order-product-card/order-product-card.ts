import { Component, computed, input, output, signal } from '@angular/core';
import { ActionButton } from '../action-button/action-button';

@Component({
  selector: 'app-order-product-card',
  imports: [ActionButton],
  templateUrl: './order-product-card.html',
  styleUrl: './order-product-card.css',
})
export class OrderProductCard {
  id = input.required<number>();
  name = input.required<string>();
  imageUrl = input.required<string>();
  price = input.required<number>();
  quantity = input.required<number>();

  quantityChange = output<number>();
  delete = output<number>();

  totalPrice = computed(() => this.price() * this.quantity())
 
  increment() {
    this.quantityChange.emit(this.quantity() + 1);
  }

  decrement() {
    if(this.quantity() > 1) {
      this.quantityChange.emit(this.quantity() - 1);
    }
  }

  handleOnDelete() {
    this.delete.emit(this.id());
  }
}
