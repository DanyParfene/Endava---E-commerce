import { Component, inject, linkedSignal, input } from '@angular/core';
import { ActionButton } from '../action-button/action-button';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-form',
  imports: [ReactiveFormsModule, ActionButton],
  templateUrl: './order-form.html',
  styleUrl: './order-form.css',
})
export class OrderForm {
    private fb = inject(NonNullableFormBuilder);

    orderForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      adress: ['', Validators.required],
      phone: ['', Validators.required],
      payment: [this.fb.control<'delivery' | 'online'>('delivery')],
    });

    submitAction() {
      console.log(this.orderForm.getRawValue());
    }
}
