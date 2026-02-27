import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { RedirectButton } from './components/redirect-button/redirect-button';
import { ProductCard } from './components/product-card/product-card';
import { Sidebar } from './components/sidebar/sidebar';
import { SidebarCategory } from './components/sidebar-category/sidebar-category';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, RedirectButton, ProductCard, Sidebar, SidebarCategory],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('client');
}
