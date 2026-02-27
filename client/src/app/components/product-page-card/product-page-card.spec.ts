import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPageCard } from './product-page-card';

describe('ProductPageCard', () => {
  let component: ProductPageCard;
  let fixture: ComponentFixture<ProductPageCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPageCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPageCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
