import { Component, signal, computed,inject } from '@angular/core';
import { OrderProductCard } from '../../components/order-product-card/order-product-card';
import { ActionButton } from '../../components/action-button/action-button';
import { CartProduct } from '../../models/cart-product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart-page',
  imports: [OrderProductCard, ActionButton],
  templateUrl: './shopping-cart-page.html',
  styleUrl: './shopping-cart-page.css',
})
export class ShoppingCartPage {
  private router = inject(Router);

  cardProducts = signal<CartProduct[]>([
    { id: 0, name: 'Apple', imageUrl: 'assets/apple.png', price: 10, quantity: 1 },
    { id: 1, name: 'Apple', imageUrl: 'assets/apple.png', price: 10, quantity: 1 },
    { id: 2, name: 'Apple', imageUrl: 'assets/apple.png', price: 10, quantity: 1 },
  ]);

  totalOrderPrice = computed(() =>
    this.cardProducts().reduce(
      (orderPrice, product) => orderPrice + product.price * product.quantity,
      0
    )
  );

  onQuantityChange(productId: number, newQuantity: number) {
    this.cardProducts.update(products =>
    products.map(product => {
      if (product.id === productId) {
        return { ...product, quantity: newQuantity };
      } else {
        return product;
      }
    })
  );
  }

  handleOnDelete(productId: number) {
    this.cardProducts.update(products => products.filter(
      product => product.id != productId
    ));
  }

  handleGoToOrderForm() {
    this.router.navigate(['/place-order']);
  }
}
