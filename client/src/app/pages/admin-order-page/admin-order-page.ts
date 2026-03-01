import { Component, input } from '@angular/core';
import { Product } from '../../models/product.model';
import { RedirectButton } from '../../components/redirect-button/redirect-button';
import { ProductCard } from '../../components/product-card/product-card';
import { FormsModule } from '@angular/forms';
import { ActionButton } from '../../components/action-button/action-button';

@Component({
  selector: 'app-admin-order-page',
  imports: [RedirectButton, ProductCard, FormsModule, ActionButton],
  templateUrl: './admin-order-page.html',
  styleUrl: './admin-order-page.css',
})
export class AdminOrderPage {
  selectedOption: string = 'pending';
  id = input<number>(0);
  name = input<string>('John Doe');
  date = input<string>('1-01-1970');
  email = input<string>("'john.doe@example.com'");
  address = input<string>('Baker Street nr. 220');
  products = input<Product[]>([
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
  ]);
}
