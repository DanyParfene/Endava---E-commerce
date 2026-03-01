import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-redirect-button',
  imports: [RouterLink],
  templateUrl: './redirect-button.html',
  styleUrl: './redirect-button.css',
})
export class RedirectButton {
  route = input.required<string>();
  imageUrl = input<string>();
  text = input<string>();
}
