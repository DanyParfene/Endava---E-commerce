import { Component, input, signal } from '@angular/core';
import { Order } from '../../models/order.model';
import { Product } from '../../models/product.model';
import { OrderCard } from '../../components/order-card/order-card';
import { ActionButton } from '../../components/action-button/action-button';

@Component({
  selector: 'app-account-page',
  imports: [OrderCard, ActionButton],
  templateUrl: './account-page.html',
  styleUrl: './account-page.css',
})
export class AccountPage {
  email = signal('john.doe@example.com');
  products = input<Product[]>([
    { id: 0, name: 'Apple', imageUrl: 'assets/apple.png', price: 5, category: 'warm-colored-fruits' },
    { id: 1, name: 'Orange', imageUrl: 'assets/orange.png', price: 9, category: 'warm-colored-fruits' },
    { id: 2, name: 'Grapes', imageUrl: 'assets/grapes.png', price: 23, category: 'warm-colored-fruits' },
    { id: 3, name: 'Apple', imageUrl: 'assets/apple.png', price: 5, category: 'cold-colored-fruits' },
    { id: 4, name: 'Orange', imageUrl: 'assets/orange.png', price: 9, category: 'cold-colored-fruits' },
    { id: 5, name: 'Grapes', imageUrl: 'assets/grapes.png', price: 23, category: 'cold-colored-fruits' },
  ]);
  orders = input<Order[]>([
    {
      id: 0,
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      address: 'Baker Street nr.221',
      date: '21-08-2024',
      products: [{ id: 0, number: 4 }, { id: 1, number: 14 }],
    },
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      address: 'Main Street nr.400',
      date: '1-04-2025',
      products: [{ id: 3, number: 9 }, { id: 2, number: 12 }],
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      address: 'Baker Street nr.221',
      date: '7-06-2025',
      products: [{ id: 5, number: 32 }, { id: 4, number: 1 }],
    },
  ]);
}
