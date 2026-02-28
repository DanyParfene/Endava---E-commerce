import { Component, input } from '@angular/core';
import { Sidebar } from '../../components/sidebar/sidebar';
import { ProductWrapper } from '../../components/product-wrapper/product-wrapper';

@Component({
  selector: 'app-category-page',
  imports: [Sidebar, ProductWrapper],
  templateUrl: './category-page.html',
  styleUrl: './category-page.css',
})
export class CategoryPage {
  readonly name = input<string>('');
}
