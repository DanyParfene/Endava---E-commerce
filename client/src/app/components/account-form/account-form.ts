import { Component, inject, input, linkedSignal } from '@angular/core';
import {NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActionButton } from '../action-button/action-button';

@Component({
  selector: 'app-account-form',
  imports: [ReactiveFormsModule, ActionButton],
  templateUrl: './account-form.html',
  styleUrl: './account-form.css',
})
export class AccountForm {
  private fb = inject(NonNullableFormBuilder);

  isLoginMode = input<boolean>(true);

  formMode = linkedSignal(() => this.isLoginMode());

  accountForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['']
  })

  formValue = this.accountForm.value;

  submitAction() {
    console.log(this.formMode())
  }
}
