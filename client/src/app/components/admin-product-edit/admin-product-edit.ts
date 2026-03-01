import { Component, inject, input, effect } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActionButton } from '../action-button/action-button';

@Component({
  selector: 'app-admin-product-edit',
  standalone: true,
  imports: [ReactiveFormsModule, ActionButton],
  templateUrl: './admin-product-edit.html'
})
export class AdminProductEdit {
  private fb = inject(FormBuilder);
  
  // Data passed from the parent component
  productData = input<any>(); 

  productForm = this.fb.group({
    name: ['', Validators.required],
    imageUrl: ['', Validators.required],
    price: [0, [Validators.required, Validators.min(0.01)]],
    description: ['', Validators.required],
    category: ['', Validators.required]
  });

  constructor() {
    // Fill the form whenever productData is provided or changed
    effect(() => {
      if (this.productData()) {
        this.productForm.patchValue(this.productData());
      }
    });
  }

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

  updateProduct() {
    if (this.productForm.valid) {
      console.log('Updating Product with:', this.productForm.value);
    }
  }

  cancel() {
    // Revert form to the original data
    if (this.productData()) {
      this.productForm.patchValue(this.productData());
    }
  }
}