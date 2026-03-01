import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ActionButton } from '../action-button/action-button';
import { RedirectButton } from '../redirect-button/redirect-button';

@Component({
  selector: 'app-admin-dashboard',
  imports: [ActionButton, RedirectButton],
  templateUrl: './admin-dashboard.html'
})
export class AdminDashboard {
  private router = inject(Router);

  logout() {
    // log out
    this.router.navigate(['/login']);
  }
}