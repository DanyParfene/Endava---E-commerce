import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderProductCard } from './order-product-card';

describe('OrderProductCard', () => {
  let component: OrderProductCard;
  let fixture: ComponentFixture<OrderProductCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderProductCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderProductCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
