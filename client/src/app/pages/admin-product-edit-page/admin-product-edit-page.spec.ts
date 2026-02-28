import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductEditPage } from './admin-product-edit-page';

describe('AdminProductEditPage', () => {
  let component: AdminProductEditPage;
  let fixture: ComponentFixture<AdminProductEditPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProductEditPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductEditPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
