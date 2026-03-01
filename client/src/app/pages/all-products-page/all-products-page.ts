import { Component } from '@angular/core';
import { ProductWrapper } from '../../components/product-wrapper/product-wrapper';
import { Sidebar } from '../../components/sidebar/sidebar';

@Component({
  selector: 'app-all-products-page',
  imports: [ProductWrapper, Sidebar],
  templateUrl: './all-products-page.html',
  styleUrl: './all-products-page.css',
})
export class AllProductsPage {

}
