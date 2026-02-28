import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceOrderPage } from './place-order-page';

describe('PlaceRoderPage', () => {
  let component: PlaceOrderPage;
  let fixture: ComponentFixture<PlaceOrderPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceOrderPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PlaceOrderPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
