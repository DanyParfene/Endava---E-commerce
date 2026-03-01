import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActionButton } from '../action-button/action-button';

@Component({
  selector: 'app-admin-product-add',
  standalone: true,
  imports: [ReactiveFormsModule, ActionButton],
  templateUrl: './admin-product-add.html'
})
export class AdminProductAdd {
  private fb = inject(FormBuilder);

  productForm = this.fb.group({
    name: ['', Validators.required],
    imageUrl: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0.01)]],
    description: ['', Validators.required],
    category: ['', Validators.required]
  });

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.productForm.patchValue({ imageUrl: reader.result as string });
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  saveProduct() {
    if (this.productForm.valid) {
      console.log('Product Data:', this.productForm.value);
    }
  }

  cancel() {
    this.productForm.reset();
  }
}