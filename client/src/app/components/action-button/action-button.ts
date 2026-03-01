import { Component, input, linkedSignal, output, } from '@angular/core';

@Component({
  selector: 'app-action-button',
  imports: [],
  templateUrl: './action-button.html',
  styleUrl: './action-button.css',
})
export class ActionButton {
  url = input<string>();
  text = input<string>();

  imageUrl = linkedSignal(() => this.url());
  buttonText = linkedSignal(() => this.text());
  
  buttonClick = output<void>();
  
  handleAction() {
    console.log(this.text());
    this.buttonClick.emit();
  }
}
