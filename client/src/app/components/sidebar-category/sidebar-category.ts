import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar-category',
  imports: [RouterLink],
  templateUrl: './sidebar-category.html',
  styleUrl: './sidebar-category.css',
})
export class SidebarCategory {
  route = input.required<string>();
  category = input.required<string>();
}
