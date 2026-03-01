import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProductAdd } from './admin-product-add';

describe('AdminProductAdd', () => {
  let component: AdminProductAdd;
  let fixture: ComponentFixture<AdminProductAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminProductAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminProductAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
