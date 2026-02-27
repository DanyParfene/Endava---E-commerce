import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { RedirectButton } from './components/redirect-button/redirect-button';
import { ProductCard } from './components/product-card/product-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, RedirectButton, ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('client');
}
