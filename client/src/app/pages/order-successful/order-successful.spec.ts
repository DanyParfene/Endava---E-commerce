import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSuccessful } from './order-successful';

describe('OrderSuccessful', () => {
  let component: OrderSuccessful;
  let fixture: ComponentFixture<OrderSuccessful>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderSuccessful]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSuccessful);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
