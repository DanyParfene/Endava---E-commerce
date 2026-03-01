import { Component, input } from '@angular/core';
import { RedirectButton } from '../redirect-button/redirect-button';

@Component({
  selector: 'app-order-card',
  imports: [RedirectButton],
  templateUrl: './order-card.html',
  styleUrl: './order-card.css',
})
export class OrderCard {
  number = input<number>(0);
  id = input<number>(0);
  date = input<string>('1.01.1970');
  name = input<string>('John Doe');
  email = input<string>("'john.doe@example.com'");
  address = input<string>('Baker Street nr. 220');
}
