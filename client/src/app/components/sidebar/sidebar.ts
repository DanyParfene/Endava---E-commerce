import { Component, input } from '@angular/core';
import { SidebarCategory } from '../sidebar-category/sidebar-category';

@Component({
  selector: 'app-sidebar',
  imports: [SidebarCategory],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  
}
