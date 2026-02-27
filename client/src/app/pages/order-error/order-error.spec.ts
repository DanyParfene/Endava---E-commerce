import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderError } from './order-error';

describe('OrderError', () => {
  let component: OrderError;
  let fixture: ComponentFixture<OrderError>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderError]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderError);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
