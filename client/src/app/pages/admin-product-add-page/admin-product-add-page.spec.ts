import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductAddPage } from './admin-product-add-page';

describe('AdminProductAddPage', () => {
  let component: AdminProductAddPage;
  let fixture: ComponentFixture<AdminProductAddPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProductAddPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductAddPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
