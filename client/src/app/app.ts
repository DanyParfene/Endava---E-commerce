import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { RedirectButton } from './components/redirect-button/redirect-button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, RedirectButton],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('client');
}
