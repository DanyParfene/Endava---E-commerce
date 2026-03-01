import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOrderPage } from './admin-order-page';

describe('AdminOrderPage', () => {
  let component: AdminOrderPage;
  let fixture: ComponentFixture<AdminOrderPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminOrderPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOrderPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
