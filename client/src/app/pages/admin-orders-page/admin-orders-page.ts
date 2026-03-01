import { Component } from '@angular/core';
import { OrderCard } from '../../components/order-card/order-card';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-admin-orders-page',
  imports: [OrderCard],
  templateUrl: './admin-orders-page.html',
  styleUrl: './admin-orders-page.css',
})
export class AdminOrdersPage {
  orders: Order[] = [
    {
      id: 0,
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      address: 'Baker Street nr.221',
      date: '21-08-2024',
      products: [
        { id: 0, number: 4 },
        { id: 1, number: 14 },
      ],
    },
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      address: 'Main Street nr.400',
      date: '1-04-2025',
      products: [
        { id: 3, number: 9 },
        { id: 2, number: 12 },
      ],
    },
    {
      id: 2,
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      address: 'Baker Street nr.221',
      date: '7-06-2025',
      products: [
        { id: 5, number: 32 },
        { id: 4, number: 1 },
      ],
    },
  ];
}
