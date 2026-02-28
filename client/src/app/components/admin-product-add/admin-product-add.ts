import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActionButton } from '../action-button/action-button';

@Component({
  selector: 'app-admin-product-add',
  imports: [ReactiveFormsModule, ActionButton],
  templateUrl: './admin-product-add.html',
  styleUrl: './admin-product-add.css',
})
export class AdminProductAdd {
  private fb = inject(NonNullableFormBuilder);

  productForm = this.fb.group({
    name: ['', Validators.required],
    imageUrl: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0.01)]],
    description: ['', Validators.required],
    category: ['', Validators.required]
  })

  saveProduct() {
    if (this.productForm.valid) {
      console.log('Product saved', this.productForm.value);
    }
  }

  cancel() {
    this.productForm.reset();
    console.log('Operation cancelled');
  }
}
