import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ProductWrapper } from '../../components/product-wrapper/product-wrapper';
import { Sidebar } from '../../components/sidebar/sidebar';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-products-page',
  imports: [ProductWrapper, Sidebar, RouterOutlet],
  templateUrl: './products-page.html',
  styleUrl: './products-page.css',
})
export class ProductsPage {
  
}
