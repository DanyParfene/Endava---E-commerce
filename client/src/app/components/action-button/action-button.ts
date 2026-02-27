import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-action-button',
  imports: [],
  templateUrl: './action-button.html',
  styleUrl: './action-button.css',
})
export class ActionButton {
  imageUrl = signal('assets/add.svg');
  
  handleAction() {
    console.log("Added to cart");
  }
}
