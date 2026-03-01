import { Component, signal, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SidebarCategory } from '../sidebar-category/sidebar-category';

@Component({
  selector: 'app-admin-sidebar',
  imports: [FormsModule, SidebarCategory],
  templateUrl: './admin-sidebar.html'
})
export class AdminSidebar {
  categories = signal<{id: string, route: string, name: string}[]>([]);
  
  isEditMode = signal(false);

  constructor() {
    const savedCategories = localStorage.getItem('admin_categories');
    
    if (savedCategories) {
      this.categories.set(JSON.parse(savedCategories));
    } else {
      this.categories.set([
        { id: '1', route: 'fruits1', name: 'Fruits1' },
        { id: '2', route: 'fruits2', name: 'Fruits2' },
        { id: '3', route: 'fruits3', name: 'Fruits3' }
      ]);
    }

    effect(() => {
      localStorage.setItem('admin_categories', JSON.stringify(this.categories()));
    });
  }

  toggleEditMode() {
    this.isEditMode.set(!this.isEditMode());
  }

  updateCategory(id: string, newName: string) {
    this.categories.update(cats => 
      cats.map(c => c.id === id ? { ...c, name: newName, route: newName.toLowerCase().replace(/\s+/g, '-') } : c)
    );
  }

  addCategory() {
    const newId = Date.now().toString();
    this.categories.update(cats => [...cats, { id: newId, route: 'new-category', name: 'New Category' }]);
  }

  deleteCategory(id: string) {
    this.categories.update(cats => cats.filter(c => c.id !== id));
  }
}